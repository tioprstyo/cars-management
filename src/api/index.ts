import { ArticlesProps } from "../type";

export const getNewsArticle = (query: string, category: string[], material: string[]) => {
  const categoryFilter = category.length > 0 ? `news_desk:(${JSON.stringify(category).slice(1, -1)})` : '';
  const materialFilter = material.length > 0 ? `type_of_material:(${JSON.stringify(material).slice(1, -1)})` : '';
  const articleList = fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=vQgolXCsjyloRSXyTvSwwRzVyyD9Tfo4&q=${query}&fq=${categoryFilter}${categoryFilter && materialFilter ? 'AND': ''}${materialFilter}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      data.response?.docs.forEach((e: ArticlesProps) => {
        if (e.multimedia.length > 0) {
          e.multimedia[0].url = `https://www.nytimes.com/${e.multimedia[0].url}`
        }
      });
      return data.response?.docs || [];
    });
  
  return articleList || [];
}

export const getNewsArticleById = (_id: string) => {
  let news = null;
  if (_id) {
    const id = `_id:("${_id}")`;
    news = fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=vQgolXCsjyloRSXyTvSwwRzVyyD9Tfo4&fq=${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
       return data.response?.docs[0];
      });
  }
  return news;
};
