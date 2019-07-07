pipeline {
  agent {
    docker {
      image 'node:12-alpine'
      args '-p 3000:3000'
    }

  }
  stages {
    stage('Source') {
      steps {
        git(url: 'https://github.com/MatsNord/bowling-service.git', branch: 'master', credentialsId: 'MatsNord', poll: true)
      }
    }
    stage('Dependencies') {
      steps {
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
        sh 'npm run test'
      }
    }
  }
  environment {
    registryCredential = 'dockerhub'
    registry = 'matsnord/dockertest'
  }
  post {
    always {
      junit 'build/reports/**/*.xml'
      xunit(thresholds: [ skipped(failureThreshold: '0'), failed(failureThreshold: '0') ], tools: [ JUnit(pattern: 'build/reports/**/*.xml') ])

    }

  }
}