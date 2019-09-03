pipeline {
  agent any
  stages {
    stage('Source') {
      agent any
      steps {
        git(url: 'git@github.com:MatsNord/bowling-service.git', branch: 'agent-test', credentialsId: 'MatsNord')
      }
    }
    stage('Dependencies') {
      agent any
      steps {
        bat 'npm install'
      }
    }
    stage('Test') {
      agent any
      steps {
        sh '"npm run test"'
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