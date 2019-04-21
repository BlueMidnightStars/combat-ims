import login from '@/pages/Login.vue';
import user from '@/pages/User.vue';
import classify from '@/pages/Classify.vue';
import aritcle from '@/pages/Aritcle.vue';
import article_create from '@/pages/ArticleCreate.vue';
import article_edit from '@/pages/ArticleEdit.vue';



export default  [
    {
      path: '/admin',
      name: 'login',
      component: login,
    },
    {
      path: '/admin/user',
      name: 'user',
      component: user,
    },
    {
      path: '/admin/classify',
      name: 'classify',
      component: classify,
    },
    {
      path: '/admin/aritcle',
      name: 'aritcle',
      component: aritcle,
    },
    {
      path: '/admin/article_create',
      name: 'article_create',
      component: article_create,
    },
    {
      path: '/admin/article_edit/:id',
      name: 'article_edit',
      component: article_edit,
    }
];
