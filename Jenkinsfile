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
        bat(script: 'npm install', returnStatus: true, returnStdout: true)
      }
    }
    stage('Test') {
      parallel {
        stage('Test') {
          steps {
            bat(script: 'npm test', returnStatus: true, returnStdout: true)
          }
        }
        stage('Test P') {
          steps {
            powershell(script: 'npm install', returnStatus: true, returnStdout: true)
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