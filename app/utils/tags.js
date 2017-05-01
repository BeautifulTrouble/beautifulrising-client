export function slugify(tag) {
  return tag.replace(/\s/ig, '-').replace(/[^\w\-]/ig,'');
}
