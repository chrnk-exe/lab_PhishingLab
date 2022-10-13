rm -rf App
docker rmi -f dslab
sleep 1
docker rm $(docker ps -a -f status=exited)
# download app
mkdir -p App
git clone https://github.com/chrnk-exe/lab_PhishingLab ./App
cd App/deploy
# run docker-compose.yml
sudo docker build -t dslab .
sudo docker run -p 80:80 dslab