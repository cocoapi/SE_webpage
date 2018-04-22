[![Build Status](https://travis-ci.org/cocoapi/SE_webpage.svg?branch=master)](https://travis-ci.org/cocoapi/SE_webpage)

# 2018학년도 1학기 소프트웨어 공학

## 1.시작하기
[yarn 설치하기](https://yarnpkg.com/en/docs/install)<br/>
[git 간편안내서](https://rogerdudler.github.io/git-guide/index.ko.html)<br/>
```
git clone https://github.com/cocoapi/SE_webpage.git
cd SE_webpage
yarn install
```
## 2.Output
```
cd SE_webpage
yarn start
```

## 3.작업시 주의사항
* 팀미팅후 작업시작시 `git pull origin master`로 소스코드 최신화 해줄 것.
* 작업은 각자 `git checkout -b [브랜치명]`을 통해 개별 브랜치에서 작업할 것.
* Merge는 travis통과한 후, 코드리뷰가 진행되야 가능하도록 설정되어 있습니다.
* yarn start 명령어를 통해 script가 실행되고 있을 경우, 소스코드의 수정이 바로 반영되니, 작업시 [tmux](https://ko.wikipedia.org/wiki/Tmux)등을 이용해 별도의 shell, 혹은 세션에서 작업해주시기 바랍니다.

## 4.참고자료
[React 강좌](https://velopert.com/775)  
[Ant Design](https://ant.design/)  
