// const apiKey= "0e18710e010e4cb684798c5d6f0be852"
var quote;
var author;



var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if(this.readyState == 4 && this.status == 200){
    responseJSON = JSON.parse(xhr.responseText);
    console.log(responseJSON);
    quote = response.JSON.quote;
    author = response.JSON.author;
  }
};
xhr.open("GET", "https://talaikis.com/api/quotes/random/ ", true);
xhr.send();


var twitter = new XMLHttpRequest();
twitter.open("POST", '/server', true);
// twitter.setRequestHeader("Content")
twitter.onreadystatechange = function(){
  responseJSON = JSON.parse(twitter.responseText);
  console.log(resposneJSON);
  // if(this.readyState == 4 && this.status == 200){
  //   console.log('success')
  // }
}
var url = "https://api.twitter.com/1.1/statuses/update.json?status=Maybe%20he%27ll%20finally%20find%20his%20keys.%20%23peterfalk"
twitter.open('POST', url, true)
twitter.send()
