# 직방 백엔드 개발

> [입사지원을 하러 가기, 클릭](https://forms.gle/ojHDzTfrVeFiQXcKA)!!

직방의 백엔드 개발자는 AWS 클라우드 기반, serverless 환경을 바탕으로 직방 서비스에 필요한 서비스를 제공 합니다. 직방의 여러 개발자들과의 tight한 협업 및 높은 coverage의 코드 셰어링을 위해서 기반 플랫폼을 Node.js / Typescript 근간으로 작업을 합니다. 이를 통해 발생할 수 있는 커뮤니케이션 오류를 최소화 하고자 노력 합니다.

백엔드 RESTful API service들은 다음과 같은 특징을 가지고 있습니다.

* AWS 클라우드 기반의 AWS Lambda / Ecs Fragate 기반으로 제공
* 개발자의 PC에서도 로컬 개발이 가능한 형태
* [Serverless](https://serverless.com/)를 이용하여 패키징 및 배포 진행
* [aws-cdk](https://aws.amazon.com/ko/cdk/) 를 활용한 패키징 및 배포 진행

이를 통해 직방은 AWS의 managed service를 통해 highly scalable한 서비스를 제공할 수 있습니다.

비-서버형 단위/배치성 모듈 (task), Daemon형 모듈 (service)이나 API Gateway / AWS Lambda 형태로 제공할 수 없는 서비스들은 ECS (Docker container), Fargate, CloudWatch, AWS Batch를 근간으로 작성하여 운영하고 있습니다. 이를 통해 언급된 백엔드 모듈들도 대부분 serverless 환경으로 운영이 될 수 있도록 합니다.

단, 일부 legacy는 `ASP.NET`으로 구성이 되어 있으며 프론트엔드팀와 함께 React 근간으로 마이그레이션을 진행 중에 있습니다.

백엔드에서 책임지고 관리하는 서비스들은 다음과 같습니다.

* 직방 API 서비스 (`api{*|l}`, `apis` v1, `apis` v2) - 아파트, 원룸, 오피스텔, 빌라, 우리집 서비스 등
* 직방 계정 연동 서비스 (account)
* 직방 푸시 발송 및 외부 메시지 서비스 (io-push)
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

### 백엔드 팀

백엔드 팀은 직방 서비스의 백엔드 서비스를 담당하는 팀입니다. 대부분의 직방서비스 API 개발 및 운영과 관련된 업무를 담당하고 있으며, 더 나아가  신규 서비스 개발과 기존 서비스 운영, 고도화, Devops 등의 업무를 함께 진행하고 있습니다.

백엔드팀은 총 5개의 파트로 나뉘어 집니다.
각각의 파트는 아래와 같습니다.

1. 원오빌/공통 파트

* 담당 업무 : 원룸, 오피스텔, 빌라 서비스 개발을 메인으로 담당하며, 추가적으로 통합로그인, 연동 api 개발 등의 부가적인 업무를 담당합니다.
* 장점 : 직방서비스의 다양한 source 를 보고 배울수 있으며, 고도화 과정을 통해서 운영의 묘미를 배울수 있는 장점이 있습니다.  모든 트레픽의 중점인 통합로그인을 관리 하게 되며, 대용량 트래픽 분산의 방법과 안정적인 서비스 구조를 고민 해 볼수 있습니다.
* 단점 : 직방의 가장 오래된 서비스 모델로 레거시가 포함되어 있습니다. 하지만 현재 레거시 모던화 진행중이며, 레거시를 마이그레이션 하는 과정에서 직방의 비즈니스 모델을 빨리 파악할 수 있습니다.

2. 아파트/제휴 파트

* 담당 업무 : 아파트 서비스, 파트너 중개사를 위한 서비스, 외부 업체 연동을 위한 OpenApi 등을 개발을 담당합니다.
* 장점 : 신규 서비스 개발을 통해서 MSA화 과정을 진행해 보실수 있으며, 운영보다는 신규 개발이 많은 편입니다.  복잡한 비즈니스 구조를 풀어가며 수익성 기반의 신규 서비스를 만들어 볼수 있습니다.
* 단점 : 신규 사업이 진행되는 만큼 비즈니스 방향이 빈번히 변경될 수 있습니다. 이에 적절히 대응할 수 있도록 유연한 설계 구조를 가져가고자 노력합니다.

3. 홈 파트

* 담당 업무 : 직방의 우리집 서비스, 컨시어지 서비스 개발을 담당합니다.
* 장점 : 기본적인 백엔드 API 서비스에서 더 나아가 일반적인 백엔드 개발자가 겪어 보지 못하는 다양한 서비스를 만들어 볼수 있는 기회가 될수 있습니다.(ex. 투표, 주차관리, IOT 등)
* 단점 : 기능개발의 일정이 서비스를 이용중인 고객에 의해 많이 좌우되는 편으로 때때로 무리한 일정으로 개발이 진행되기도 합니다. 하지만 워라벨을 지키기 위해 항상 노력합니다.

4. IO 파트

* 담당 업무 : 직방의 Push 서비스, Messaging (sms, 알림톡, email 등) 서비스, 050 안심번호 서비스를 담당합니다.
* 장점 : push, messaging 서비스, 050 안심번호 서비스를 개발 및 운영 하며, 직방 서비스의 보이지 않는 백엔드의 백엔드를 담당하게 됩니다. 그 과정에서 일반적인 개발파트에서 경험할 수 없는 다양한 외부 서비스 연동경험과 대용량 데이터(push) 처리 경험을 쌓을 수 있습니다. 또한 직방 내의 거의 대부분의 서비스에서 IO 서비스를 연동하기 때문에, 직방 내의 다양한 파트와 커뮤니케이션 할 수 있는 기회가 있습니다.
* 단점 : 다양한 외부 서비스를 연동하다보니, 직방 내부적인 시스템 관리 뿐만 아니라 부가적으로 외부 서비스 업체의 관리도 함께 진행해야 합니다. 또한 이러한 이유로 외부 서비스 업체 장애 시 영향을 많이 받는 편 입니다.

5. TD 파트

* 담당업무 : devops관련 업무와, 공통 시스템 관련 업무, 보안 관련 업무를 주로 다루며, 각 서비스의 용병(?) 역할도 함께 수행합니다.

* 장점 : 직방의 백앤드 시스템을 다양한 측면에서 볼수 있는 기회를 가질수 있습니다. 직방의 전반적인 시스템 구조를 이해 할수 있는 기회를 가질수 있습니다.

* 단점 : 너무 다양한 방면으로 업무를 진행하다 보니 기술적 Depth 가 낮아 질수 있는 위험이 있습니다. 따라서 꾸준한 자기 관리가 필요합니다.

### 자격요건

* Familiar with AWS technologies(Cloud server)
* Node.js의 일반적인 이해도 및 활용 경력 또는 javascript framework 을 통한 개발 경험(ex. backbone, angular, react)
* Typescript 또는 OOP에 대한 기본적인 이해도
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

* 서비스 운영 내에서는 JIRA (and/or Asana), Slack
* 일부 유관 부서와의 협업 시 Email, Telegram 사용 필요

### 기술스택

* Node.js / Express / Serverless / Routing Controllers / NestJS (partially)
* Serverless Cloud (mostly AWS)
  * AWS API Gateway / AWS Lambda / CloudFront
  * ECS / Fargate / Docker
* Aurora (MySQL), Document Db(Mongo), Elasticsearch Service, ElasticCache Service
* Typescript (No Javascript)
* GitHub
* Azure DevOps (CI/CD)

# 모집 공고

> [입사지원을 하러 가기, 클릭](https://forms.gle/ojHDzTfrVeFiQXcKA)!!

* 개발팀 백엔드팀
  * [파트 리드](./lead.md)
  * [테크니컬 리드](./tech-lead.md)
  * [개발자](./developer.md)
