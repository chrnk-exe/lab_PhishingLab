# install docker
sudo apt-get update -y
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
rm get-docker.sh
sudo curl -L "https://github.com/docker/compose/releases/download/1.25.3/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
sudo systemctl enable docker

# cd /home/admin/app/

# download app
mkdir -p App
git clone https://github.com/chrnk-exe/lab_PhishingLab ./App
cd App/deploy
# run docker-compose.yml
sudo docker build -t dslab .
sudo docker run -p 80:80 

# clear history
history -c
echo "" | sudo tee /var/log/auth.log
rm -rf ~/.bash_history
kill -9 $$