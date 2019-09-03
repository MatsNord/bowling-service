pipeline {
  agent any
  stages {
    stage('Source') {
      steps {
        git(url: 'https://github.com/MatsNord/bowling-service.git', branch: 'master', credentialsId: 'MatsNord', poll: true)
      }
    }
    stage('Dependencies') {
      steps {
        bat 'npm install'
      }
    }
    stage('Test') {
      steps {
        bat(script: 'npm run test', label: 'Test', returnStatus: true, returnStdout: true)
      }
    }
  }
  post {
    always {
      junit 'build/reports/**/*.xml'
    }
  }
  environment {
    CI = 'true'
  }
}
