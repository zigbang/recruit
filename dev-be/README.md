# 직방 백엔드 개발

> [입사지원을 하러 가기, 클릭](https://zigbang.recruiter.co.kr/app/applicant/registResume)!!

직방의 백엔드 개발자는 AWS 클라우드 기반, serverless 환경을 바탕으로 직방 서비스에 필요한 서비스를 제공 합니다. 직방의 여러 개발자들과의 tight한 협업 및 높은 coverage의 코드 셰어링을 위해서 기반 플랫폼을 Node.js / Typescript 근간으로 작업을 합니다. 이를 통해 발생할 수 있는 커뮤니케이션 오류를 최소화 하고자 노력 합니다.

백엔드 RESTful API service들은 다음과 같은 특징을 가지고 있습니다.

* AWS 클라우드 기반의 API Gateway / AWS Lambda 기반으로 제공
* 개발자의 PC에서도 로컬 개발이 가능한 형태
* 이후 타 클라우드나 on-premise 기반에서도 구동될 수 있도록 Express (and/or Koa) 기반으로 구성
* [Serverless ](https://serverless.com/)를 이용하여 패키징 및 배포 진행

이를 통해 직방은 AWS의 managed service를 통해 highly scalable한 서비스를 제공할 수 있습니다.

비-서버형 단위/배치성 모듈 (task), Daemon형 모듈 (service)이나 API Gateway / AWS Lambda 형태로 제공할 수 없는 서비스들은 ECS (Docker container), Fargate, CloudWatch, AWS Batch를 근간으로 작성하여 운영하고 있습니다. 이를 통해 언급된 백엔드 모듈들도 대부분 serverless 환경으로 운영이 될 수 있도록 합니다.

단, 일부 legacy는 `ASP.NET`으로 구성이 되어 있으며 프론트엔드 파트와 함께 React 근간으로 마이그레이션을 진행 중에 있습니다.

백엔드에서 책임지고 관리하는 서비스들은 다음과 같습니다.

* 직방 API 서비스 (`api{*|l}`, `apis` v1, `apis` v2)
* 직방 계정 연동 서비스 (account)
* 직방 푸시 발송 서비스 (messaging)
* 직방 CEO 웹 (중개사들이 이용하는 웹사이트, mostly `ASP.NET`)
* 직방 관리자 웹 (직방 내부에서 이용하는 관리자 웹사이트, mostly `ASP.NET`)
* 직방 배치 서비스 (batch)
* 직방 검색 서비스 (search)
* 직방 결제 서비스 (pay)
* 직방 내부 서비스 (zigbang.io) - 050, SMS/LMS/알림톡 연동 등

직방 백엔드 개발자로 활동 할 경우 다음과 같은 이점들이 있습니다.

* Serverless 환경을 우선 시하여 추가적인 비용은 들어가더라도 어플리케이션 개발에 더 집중할 수 있는 환경을 제공하여 개발자로 하여금 비즈니스 개발에 집중할 수 있도록 합니다.
* 하고 싶은 분야가 있으면 적극적으로 개시해서 진행할 수 있습니다.
* 내부 구성원들이 각자의 전문 영역이 있기 때문에 다양한 분야의 사람들에게 서로 피드백을 받을 수 있어서 상호 성장하고 배울 수 있습니다.
* 최신 트렌드를 중시하고 흐름을 놓치지 않으려고 노력 합니다. 그래서 하고 싶은게 있으면 할 수 있는 기회가 많습니다.
  * AWS 서비스 중에 사용하지 않는 서비스를 나열하는 것이 더 빠를 정도로 AWS의 다양한 서비스를 이용하고 있습니다.
* 직방은 System Engineer가 없는 조직으로 System Engineer가 필요한 부분은 대부분 클라우드 서비스로 대체 합니다.

### 자격요건

* Familiar with AWS technologies(Cloud server)
* Node.js의 일반적인 이해도 및 활용 경력 또는 javascript framework 을 통한 개발 경험(ex. backbone, angular, react)
* Typescript / OOP에 대한 기본적인 이해도
* framework 를 통한 백앤드 개발 경험(ex. Spring, Django, Express)
* RDB 사용 경험(ex. ORM )
* async/await에 대한 이해도 (No callbacks unless necessary!)
* *nix 기반 운영체제에 대한 기본적인 이해도
* 개발 자료에 대한 영어 독해 능력

### 우대사항
* DevOps에 대한 이해도
* 영어 작문 능력
* opensource committer/contributor
* Experience with GraphQL or NestJS
* Experience with Kubernetes
* Experience with Aws ECS, EKS

### 협업 도구

* 서비스 운영 내에서는 JIRA (and/or Asana), Confluence, Slack
* 일부 유관 부서와의 협업 시 Email, Telegram 사용 필요

### 기술스택

* Node.js / Express / Serverless / Routing Controllers / NestJS (partially)
* Serverless Cloud (mostly AWS, partially Azure)
  * AWS API Gateway / AWS Lambda / CloudFront
  * ECS / Fargate / Docker
* Aurora (MySQL)
* Typescript (No Javascript)
* GitHub
* Azure DevOps (CI/CD)

# 모집 공고

> [입사지원을 하러 가기, 클릭](https://zigbang.recruiter.co.kr/app/applicant/registResume)!!

* 개발팀 백엔드 파트
  * [파트 리드](./lead.md)
  * [테크니컬 리드](./tech-lead.md)
  * [개발자](./developer.md)
