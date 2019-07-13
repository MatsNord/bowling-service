pipeline {
  agent {
    docker {
      image 'node'
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
        bat 'npm install'
      }
    }
    stage('Test') {
      steps {
        powershell 'npm run test'
      }
    }
  }
  post {
    always {
      junit 'build/reports/**/*.xml'
      xunit(thresholds: [ skipped(failureThreshold: '0'), failed(failureThreshold: '0') ], tools: [ JUnit(pattern: 'build/reports/**/*.xml') ])

    }

  }
}