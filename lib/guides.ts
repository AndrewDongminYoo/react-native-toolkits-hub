import type { ToolkitSlug } from "@/lib/toolkits";

export type Locale = "en" | "ko";

export const guides: Record<
  ToolkitSlug,
  {
    question: string;
    summary: string;
    preparation: string;
    steps: { title: string; description: string; code?: string; language?: string }[];
    success: string;
    help: string;
  }
> = {
  "rn-agents-kit": {
    question: "프로젝트 상태부터 살펴보고 싶어요",
    summary:
      "Claude Code에 React Native 전용 스킬 10개를 더해 보세요. 프로젝트를 먼저 읽고, 변경이 필요할 때는 승인을 구해요.",
    preparation:
      "Claude Code를 준비하고, 살펴볼 React Native 프로젝트를 열어 주세요. 아래 명령은 일반 터미널이 아니라 Claude Code 안에서 실행해요.",
    steps: [
      {
        title: "먼저 마켓플레이스를 추가해요",
        description: "플러그인을 가져올 공개 저장소를 등록하는 과정이에요.",
        code: "/plugin marketplace add AndrewDongminYoo/rn-agents-kit",
        language: "text",
      },
      {
        title: "프로젝트 도우미를 설치해요",
        description: "등록한 마켓플레이스에서 RN Agents Kit를 설치해 주세요.",
        code: "/plugin install rn-agents-kit@rn-agents-kit",
        language: "text",
      },
      {
        title: "작은 점검부터 부탁해 보세요",
        description:
          "rn-project-snapshot 스킬로 React Native 버전, 아키텍처 설정, 패키지 매니저를 먼저 살펴보세요. 이 결과를 보고 다음 점검을 고르면 돼요.",
      },
    ],
    success:
      "프로젝트 상태를 담은 보고서를 확인해 보세요. 소스 변경을 제안받으면 내용을 먼저 읽고, 동의한 변경의 git diff를 검토해 주세요.",
    help: "플러그인이 보이지 않나요? Claude Code의 플러그인 목록과 마켓플레이스 등록 상태를 확인해 주세요. 공개 README에서 지원하는 설치 경로도 확인할 수 있어요.",
  },
  "rn-typed-assets": {
    question: "이미지 경로를 더 안전하게 쓰고 싶어요",
    summary:
      "이미지, SVG, Lottie 파일을 이름으로 꺼내 쓰는 TypeScript 목록으로 만들어요. 긴 파일 경로 대신 자동완성의 도움을 받아 보세요.",
    preparation:
      "TypeScript가 있는 React Native 프로젝트가 필요해요. package.json이 있는 폴더에서 시작하고, 에셋 위치가 기본 경로와 다르면 설정을 먼저 확인해 주세요.",
    steps: [
      {
        title: "개발용 패키지를 추가해요",
        description:
          "프로젝트 루트의 터미널에서 실행해 주세요. 앱에서 쓰는 라이브러리가 아니라 개발할 때 사용하는 도구예요.",
        code: "npm install --save-dev rn-typed-assets",
        language: "bash",
      },
      {
        title: "에셋 목록을 만들어요",
        description:
          "기본 설정에서는 src/generated/에 assets.gen.ts와 assets.manifest.json이 만들어져요. 생성된 파일을 열어 이름을 확인해 주세요.",
        code: "npx rn-typed-assets generate",
        language: "bash",
      },
      {
        title: "생성된 이름으로 바꿔 보세요",
        description:
          "생성된 assets.gen.ts에서 Assets를 가져오고, 자동완성으로 프로젝트에 실제 존재하는 키를 골라 주세요. 먼저 이미지 하나만 바꿔서 화면이 잘 나오는지 확인해도 좋아요.",
      },
      {
        title: "안 쓰는 파일은 먼저 확인만 해요",
        description:
          "아래 명령은 사용하지 않는 에셋을 보고해요. --fix는 파일을 삭제하고 목록을 다시 생성하므로, 보고서와 Git 상태를 검토한 뒤에만 사용해 주세요.",
        code: "npx rn-typed-assets audit",
        language: "bash",
      },
    ],
    success:
      "에디터에서 에셋 이름이 자동완성되고, 프로젝트의 타입 검사와 앱 화면에서 이미지가 정상적으로 표시되는지 확인해 주세요.",
    help: "목록이 비어 있나요? 에셋 폴더와 설정 경로를 확인해 주세요. SVG를 사용한다면 react-native-svg 등 프로젝트의 SVG 설정도 함께 확인해야 해요.",
  },
  "rn-newarch-ready": {
    question: "New Architecture 준비가 됐는지 궁금해요",
    summary:
      "프로젝트 설정과 설치된 패키지, 앱의 네이티브 코드를 읽고 검토할 부분을 알려 줘요. 점검 명령은 프로젝트 파일을 바꾸지 않아요.",
    preparation:
      "React Native 프로젝트의 의존성을 먼저 설치해 주세요. package.json이 있는 폴더에서 실행하면 현재 프로젝트를 점검해요.",
    steps: [
      {
        title: "점검 도구를 준비해요",
        description: "개발용 의존성으로 추가해 두면 같은 프로젝트에서 다시 점검하기 편해요.",
        code: "npm install --save-dev rn-newarch-ready",
        language: "bash",
      },
      {
        title: "첫 보고서를 받아 봐요",
        description:
          "로컬 설정과 설치된 패키지부터 확인해요. 온라인에서는 불확실한 패키지에 공개 디렉터리 정보를 보충할 수 있어요.",
        code: "npx rn-newarch-ready",
        language: "bash",
      },
      {
        title: "모르는 항목부터 살펴봐요",
        description:
          "unknown은 호환되지 않는다는 뜻이 아니라 근거가 부족하다는 뜻이에요. needs-review가 나오면 패키지 버전과 앱의 네이티브 모듈을 검토해 주세요. 이 판정은 종료 코드 1을 반환할 수 있어요.",
      },
      {
        title: "네트워크 없이도 점검할 수 있어요",
        description:
          "로컬 정보만으로 점검하고 싶을 때는 --offline을 붙여 주세요. 자동화에 사용할 보고서는 --json으로 받을 수 있어요.",
        code: "npx rn-newarch-ready --offline",
        language: "bash",
      },
    ],
    success:
      "보고서의 판정과 검토할 항목을 확인했다면 첫 점검은 끝이에요. ready 판정도 실제 기기에서의 빌드·동작 테스트를 대신하지는 않아요.",
    help: "not-installed 항목이 있나요? 프로젝트 의존성을 설치한 다음 다시 실행해 주세요. unknown 항목은 해당 라이브러리의 문서와 현재 고정된 버전을 확인해 주세요.",
  },
  "design-to-nativewind": {
    question: "Figma 디자인을 앱 코드로 옮기고 싶어요",
    summary:
      "Figma에서 선택한 디자인을 React Native와 NativeWind 컴포넌트 코드로 바꿔요. 생성된 코드를 출발점으로 삼고, 앱에서 직접 확인해 보세요.",
    preparation:
      "Figma 디자인 파일과 코드를 적용할 React Native·NativeWind 프로젝트를 준비해 주세요. 터미널 설치 대신 Figma Community에서 시작해요.",
    steps: [
      {
        title: "Figma에서 플러그인을 열어요",
        description:
          "아래 Figma Community 링크에서 Design to NativeWind를 열고, 작업할 디자인 파일에서 실행해 주세요.",
      },
      {
        title: "작은 영역 하나를 선택해요",
        description:
          "먼저 프레임이나 컴포넌트 하나를 선택해 보세요. 선택한 하위 트리의 Auto Layout, 간격, 색상, 텍스트 정보를 변환에 사용해요.",
      },
      {
        title: "코드를 만들고 앱에 옮겨요",
        description:
          "생성된 React Native·NativeWind 코드를 살펴본 뒤 프로젝트에 적용해 주세요. SVG가 포함됐다면 react-native-svg 설정도 확인해 주세요.",
      },
      {
        title: "실제 화면과 나란히 확인해요",
        description:
          "기기나 시뮬레이터에서 간격, 텍스트 줄바꿈, 이미지가 의도대로 보이는지 확인해 주세요. 지원되지 않는 표현은 앱에 맞게 조정하면 돼요.",
      },
    ],
    success:
      "선택한 디자인의 코드가 생성되고 앱에서 렌더링되는지 확인해 주세요. 변환은 디자인 전달을 돕지만, 앱의 상태나 동작까지 완성해 주지는 않아요.",
    help: "결과가 예상과 다른가요? 선택 범위를 줄여 보고 Auto Layout 설정을 확인해 주세요. 지원하는 변환 범위는 공개 저장소에서 확인할 수 있어요.",
  },
};

export const englishQuestions: Record<ToolkitSlug, string> = {
  "rn-agents-kit": "Help me understand my project",
  "rn-typed-assets": "Make my asset paths safer",
  "rn-newarch-ready": "Check my New Architecture readiness",
  "design-to-nativewind": "Bring my Figma design into the app",
};

export function localePath(locale: Locale, path = "") {
  return locale === "ko" ? `/ko${path}` : path || "/";
}
