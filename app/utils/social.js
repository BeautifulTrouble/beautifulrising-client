
export function twitterFollow(handle) {
  window.open(`https://twitter.com/intent/follow?screen_name=${encodeURIComponent(handle)}`, `${Math.random()}`, 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=600');
}
export function twitterShare(title, url) {
  window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(`Checkout "${title}" at @beautrising`)}&url=${encodeURIComponent(url)}`, `${Math.random()}`, 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600')
}

export function facebookShare(url) {
  
  window.open(`https://www.facebook.com/dialog/share?href=${url}&app_id=142496076313954&display=popup`, `${Math.random()}`, 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=655,width=570')
}
