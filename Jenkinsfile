pipeline{
    agent any

    triggers{
        githubPush()
    }

    environment{
        DOCKER_IMAGE = "dhruvamaheshwari47/jenkins_etp"
        CONTAINER_NAME = "etp_prepration"
        PORT = '3000'
    }

    tools{
        nodejs "NODE22"
    }

    stages{
        stage('CLONE')
        {
            steps{
                git url: "https://github.com/Dhruvamaheshwari/jenkins_ETP_sem_6.git"
                branch: "main"
            }

        }

        stage('install')
        {
            steps{
                bat "npm install"   
            }
        }

        stage('Docker build')
        {
            steps{
                bat "docker build -t ${DOCKER_IMAGE}:latest ."
            }
        }

        stage('run container')
        {
            steps{
                bat "docker run -d -p ${PORT}:8080 --name ${CONTAINER_NAME} ${DOCKER_IMAGE}:latest"
            }
        }

    }

    post{
        success{
            echo "pipe line successfully completed"
        }
    }
}