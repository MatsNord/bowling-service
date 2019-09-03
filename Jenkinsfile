pipeline {
  agent any
  stages {
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