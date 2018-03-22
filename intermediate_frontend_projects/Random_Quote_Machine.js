// const apiKey= "0e18710e010e4cb684798c5d6f0be852"
var quote;
var author;



var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if(this.readyState == 4 && this.status == 200){
    responseJSON = JSON.parse(xhr.responseText);
    console.log(responseJSON);
    quote = responseJSON.quote;
    author = responseJSON.author;
  }
};
xhr.open("GET", "https://talaikis.com/api/quotes/random/ ", true);
xhr.send();






var twitter = new XMLHttpRequest();
twitter.open("POST", '/server', true);
// twitter.setRequestHeader("Content")
twitter.onreadystatechange = function(){
  console.log(twitter.responseText);
  responseJSON = JSON.parse(twitter.responseText);
  console.log(resposneJSON);
  // if(this.readyState == 4 && this.status == 200){
  //   console.log('success')
  // }
}
var url = "https://api.twitter.com/1.1/statuses/update.json?status=Hello%20world?"
twitter.open('POST', url, true)
twitter.send()
