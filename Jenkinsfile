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
        git(url: 'https://github.com/MatsNord/bowling-service.git', branch: 'master', credentialsId: 'MatsNord', poll: true)
      }
    }
    stage('Dependencies') {
      steps {
        sh 'npm install'
      }
    }
  }
  environment {
    CI = 'true'
  }
  post {
    always {
      junit 'build/reports/**/*.xml'
      xunit(thresholds: [ skipped(failureThreshold: '0'), failed(failureThreshold: '0') ], tools: [ JUnit(pattern: 'build/reports/**/*.xml') ])

    }

  }
}