pipeline{
    agent any

    tools{
        nodejs "NODE22"
    }

    stages{
        stage("build the Node app")
        {
            steps{
                git url: 'https://github.com/Dhruvamaheshwari/jenkins_ETP_sem_6.git',
                branch: 'main'
                bat : 'npm install'
            }
        }

    }
}