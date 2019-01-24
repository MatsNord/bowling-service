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
    stage('Notify') {
      steps {
        mail(subject: 'Bowling ', body: 'Build', from: 'Jenkins', to: 'mats.nord@sigma.se')
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