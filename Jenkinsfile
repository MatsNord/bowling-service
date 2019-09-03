pipeline {
  agent {
    node {
      label 'nodejs1'
    }

  }
  stages {
    stage('Source') {
      steps {
        git(url: 'https://github.com/MatsNord/bowling-service.git', branch: 'agent-test', credentialsId: 'MatsNord')
      }
    }
    stage('Deps') {
      steps {
        powershell 'npm i'
      }
    }
    stage('Test') {
      steps {
        powershell 'npm run test'
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