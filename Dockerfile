# Job Board API
# Installs StrongLoop and Git
FROM dockerfile/nodejs

#Installing Loopback & Grunt
RUN npm install -g strongloop && \
		npm install -g grunt

# Create App Directory and CD into it
RUN mkdir /data/app
WORKDIR /data/app

# Deploy project
ADD ./app/ /data/app/
RUN npm install

# Run App
EXPOSE 3000

