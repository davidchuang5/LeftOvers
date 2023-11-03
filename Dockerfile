
FROM node:18.12-alpine3.17 AS leftovers

# Set the working directory to the client directory
WORKDIR /Users/davidchuang/Desktop/Codesmith/solo_project_ideation

# Copy files and install dependencies
COPY ../package.json ../package-lock.json ./
RUN npm install
COPY . .

# Build the app
RUN npm run build

FROM nginx
EXPOSE 80
COPY --from=leftovers /Users/davidchuang/Desktop/Codesmith/solo_project_ideation /usr/share/nginx/html




