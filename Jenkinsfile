pipeline {
  agent any
  stages {
    stage('Source') {
      steps {
        git(url: 'https://github.com/MatsNord/bowling-service.git', branch: 'agent-test', credentialsId: 'MatsNord')
      }
    }
    stage('Deps') {
      steps {
        powershell(script: 'npm install', label: 'Deps')
      }
    }
    stage('Test') {
      parallel {
        stage('Test') {
          steps {
            sh 'npm run test'
          }
        }
        stage('') {
          steps {
            powershell(script: 'npm test', label: 'Test P')
          }
        }
      }
    }
  }
  environment {
    CI = 'true'
  }
  post {
    always {
      junit 'build/reports/**/*.xml'

    }

  }
}