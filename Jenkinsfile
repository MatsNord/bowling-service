pipeline {
  agent {
    node {
      label 'nodejs1'
    }

  }
  stages {
    stage('Source') {
      agent {
        node {
          label 'nodejs1'
        }

      }
      steps {
        git(url: 'git@github.com:MatsNord/bowling-service.git', branch: 'agent-test', credentialsId: 'MatsNord')
      }
    }
    stage('Dependencies') {
      steps {
        bat 'npm install'
      }
    }
    stage('Test') {
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