pipeline {
  agent any
  stages {
    stage('Source') {
      steps {
        git(url: 'https://github.com/MatsNord/bowling-service.git', branch: 'master', credentialsId: 'MatsNord', poll: true)
      }
    }
  }
  environment {
    CI = 'true'
  }
}