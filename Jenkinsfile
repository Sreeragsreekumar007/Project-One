pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                bat 'node --version'
                bat 'npm --version'
                bat 'npm ci'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install chromium'
            }
        }

        stage('Check Playwright Tests') {
            steps {
                bat 'npx playwright test --list'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npx playwright test'
            }
            post {
                always {
                    archiveArtifacts(
                        artifacts: 'homepage-*.png',
                        allowEmptyArchive: true,
                        followSymlinks: false
                    )
                }
                success {
                    powershell '''
                        Remove-Item -Path "homepage-*.png" `
                            -Force -ErrorAction SilentlyContinue
                    '''
                }
            }
        }
    }
}