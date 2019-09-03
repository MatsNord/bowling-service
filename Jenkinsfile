pipeline {
  agent {
    node {
      label 'nodejs1'
    }

  }
  stages {
    stage('Dependencies') {
      steps {
        bat(script: 'npm install', returnStdout: true, returnStatus: true)
      }
    }
    stage('Test') {
      steps {
        bat(script: 'npm run test', label: 'Test', returnStatus: true, returnStdout: true)
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