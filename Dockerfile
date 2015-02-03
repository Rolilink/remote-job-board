# Job Board API
# Installs StrongLoop and Git
FROM dockerfile/nodejs

#Installing Loopback
RUN npm install -g strongloop

# Create App Directory and CD into it
RUN mkdir /data/app
WORKDIR /data/app

# Deploy proeject
ADD ./ /data/app/

# Run App
WORKDIR /data/app/
RUN npm install

EXPOSE 3000
CMD ['bash']

