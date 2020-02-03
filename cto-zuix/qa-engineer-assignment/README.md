## 직방 QA 엔지니어 채용 과제

### System Requirements
- NodeJS >= 12 <br>[nvm](https://github.com/nvm-sh/nvm/blob/master/README.md)을 통한 설치를 권장합니다.
- [yarn](https://legacy.yarnpkg.com/en/docs/getting-started)
- Git
- Chrome

### Clone BoilerPlate
```
git clone https://github.com/zigbang/recruit
```

### Project 실행
```
cd ./recruit/cto-zuix/qa-engineer-assignment
yarn
yarn test
```

- 설정이 완료되었다면 `yarn test` 실행후 결과는 다음과 같이 출력되야합니다.
```
[0-0] PASSED in chrome - /src/specs/SampleSuite.ts
2020-01-30T07:49:02.547Z INFO @wdio/cli:launcher: Run onComplete hook

 "spec" Reporter:
------------------------------------------------------------------
[chrome  mac os x #0-0] Spec: /Users/xeoh/Projects/assignments/zuix-qa/src/specs/SampleSuite.ts
[chrome  mac os x #0-0] Running: chrome on mac os x
[chrome  mac os x #0-0] Session ID: bef73bf28e849caf80c6d333bbe258a9
[chrome  mac os x #0-0]
[chrome  mac os x #0-0] SampleSuite
[chrome  mac os x #0-0]    ✓ SampleTest_게이트웨이화면
[chrome  mac os x #0-0]    ✓ SampleTest_아파트진입
[chrome  mac os x #0-0]    ✓ SampleTest_원름진입
[chrome  mac os x #0-0]
[chrome  mac os x #0-0] 3 passing (33s)


Spec Files:	 1 passed, 1 total (100% completed) in 00:00:34 
```

### Stack
- [WebDriverIO](https://webdriver.io/)
- [typescript](https://www.typescriptlang.org/)
- [tslint](https://palantir.github.io/tslint/)
- [@testdeck/mocha](https://testdeck.org/)


### Programming Requirements
- `./src/pages` 폴더에 [Page Object Pattern](https://webdriver.io/docs/pageobjects.html) 이 적용된 파일을 작성해야합니다.
- `./src/specs` 폴더에 Test Suite를 작성해야합니다. Test Suite는 `@testdeck/mocha`를 사용해야합니다.
- `./src/utils` 위 두가지를 제외한 코드는 모두 이 디렉토리에 있어야합니다.
- 모든 스크립트 파일은 `.ts` 형식이여야 합니다. (`.js`의 자바스크립트 파일은 허용하지 않습니다)
- 모든 Test Suite는 BaseSpec을 상속받아야합니다.
- 같은 Test Suite의 `@test`와 `@test`사이에는 종속성이 없어야 합니다. 즉, `@test`가 실행되는 순서에 무관하게 테스트가 성공해야 합니다.
- `yarn lint` 실행시 error가 없어야 합니다.
- `yarn build` 실행시 error가 없어야 합니다.
- `yarn test` 실행시 test가 실행 되어야 한다. (다음부동산 웹사이트에 버그가 있다면, Test Case가 Fail 일 수 있습니다)

### 프로젝트를 끝낸 시점에 알아야 할 것들
- Web Driver란 무엇인가
- Typescript
- Node
- Yarn
- OOP에 대한 기본적인 이해
- Page Object Pattern
