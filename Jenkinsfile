pipeline{
    agent any

    tools{
        nodejs "NODE22"
    }

    triggers{
        githubPush()
    }

    environment{
        DOCKER_IMAGE = "dhruvamaheshwari47/jenkins_etp_prepation"
        CONTAINER_NAME = "etp_prepration"
        DOCKER_TAG  =  "latest" 
        PORT = 4000
    }

    stages{
        stage("clone")
        {
            steps{
                git url : "https://github.com/Dhruvamaheshwari/jenkins_ETP_sem_6.git",
                branch: "main"
            }
        }
        stage("install all dependency")
        {
            steps{
                bat "npm install"
            }
        }
        stage('build Docker image')
        {
            steps{
                bat "docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} ."
            }
        }
        stage("push Docker image") {
            steps {
                withCredentials([
                    usernamePassword(
                        credentialsId: "dockerhub",
                        usernameVariable: 'DOCKER_USERNAME',
                        passwordVariable: 'DOCKER_PASSWORD'
                    )
                ]){
                    bat "echo Username: %DOCKER_USERNAME%"
                    bat "echo Password length: %DOCKER_PASSWORD%"
                    bat """
                        echo %DOCKER_PASSWORD% | docker login -u %DOCKER_USERNAME% --password-stdin
                        docker push ${DOCKER_IMAGE}:${DOCKER_TAG}
                    """
                }
            }
        }

        stage('stop old container')
        {
            steps{
                bat "docker rm -f ${CONTAINER_NAME} || true"
            }
        }

        stage("run the new container")
        {
            steps{
                bat "docker run -d -p ${PORT}:8080 --name ${CONTAINER_NAME} ${DOCKER_IMAGE}:${DOCKER_TAG}"
            }
        }
    }

    post{
        success {
            echo "pipeline is running"
        }
    }
}