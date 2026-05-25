pipeline{
    agent any

    type{
        node 'NODE22'
    }

    stages{
        stage('build the node js app'){
            step{
                git url : "https://github.com/Dhruvamaheshwari/jenkins_ETP_sem_6.git"
                branch : "main"
                bat "npm install"
            }
        }
    }
}