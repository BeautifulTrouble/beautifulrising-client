export function slugify(tag) {
  return tag.toLowerCase().replace(/\s/ig, '-').replace(/[^\w\-]/ig,'');
}
