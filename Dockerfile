# Job Board API
# Installs StrongLoop and Git
FROM dockerfile/nodejs

#Installing Loopback
RUN npm install -g strongloop

# Create App Directory and CD into it
RUN mkdir /data/app
WORKDIR /data/app

# Deploy project
ADD ./app/ /data/app/

# Run App
WORKDIR /data/app/
RUN grunt deploy

EXPOSE 3000
CMD ['bash']

