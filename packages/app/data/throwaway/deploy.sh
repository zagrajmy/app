git subtree split --prefix data/throwaway -b temporary
git push -f heroku temporary:master
git branch -D temporary 
