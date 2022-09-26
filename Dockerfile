FROM "node:18"

WORKDIR /src/app/

COPY . .

# ENTRYPOINT ["npm", "run"]
# CMD ["run", "dev"]

EXPOSE 3000/tcp
