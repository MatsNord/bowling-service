pipeline {
  agent {
    docker {
      image 'node'
      args '-p 3000:3000'
    }

  }
  stages {
    stage('Source') {
      steps {
        git(url: 'https://github.com/MatsNord/bowling-service.git', branch: 'test-dockerjenkins', credentialsId: 'MatsNord', poll: true, changelog: true)
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
    registry = 'docker.io'
  }
  post {
    always {
      junit 'build/reports/**/*.xml'
      xunit(thresholds: [ skipped(failureThreshold: '0'), failed(failureThreshold: '0') ], tools: [ JUnit(pattern: 'build/reports/**/*.xml') ])

    }

  }
}