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
        bat 'npm i'
      }
    }
    stage('Unit Test') {
      parallel {
        stage('Test') {
          steps {
            bat 'npm run test'
          }
        }
        stage('Integration Test') {
          steps {
            powershell 'npm run test'
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