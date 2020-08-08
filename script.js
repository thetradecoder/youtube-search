$(document).ready(()=>{
  $('#youtubeSearch').submit((e)=>{
    e.preventDefault();
    let youtubeSearchContent = $('#youtubeSearchInput').val().split(' ').join('+');
    const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${youtubeSearchContent}`;
    window.open(youtubeSearchUrl);
  })
})