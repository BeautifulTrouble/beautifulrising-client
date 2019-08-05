
#git pull && npm install

npm run build 
ln -s ~/assets build/assets 
rm -vrf site 
cp -av build site 
