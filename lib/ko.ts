export const korean: Record<string, string> = {
  "React Native Toolkits / Field index": "React Native Toolkits / 도구 모음",
  "Build less blind.": "추측은 줄이고.",
  "Ship more certain.": "확신을 더하다.",
  "A focused collection of developer tools for the React Native work that gets brittle: assets, architecture audits, design handoff, and agent-led maintenance.":
    "에셋 관리부터 아키텍처 점검, 디자인 구현, 에이전트 기반 유지보수까지. React Native 개발의 불안정한 지점을 다루는 도구 모음입니다.",
  "Browse the field kit": "도구 살펴보기",
  "Meet the agent kit": "에이전트 키트 알아보기",
  "Audit": "점검",
  "10 skills": "10가지 스킬",
  "Consent": "동의",
  "explicit": "명시적 승인",
  "Review": "검토",
  "The agent kit's operating contract: read first, ask before writing, hand back a diff.":
    "에이전트 키트의 원칙: 먼저 읽고, 변경 전에 묻고, diff로 결과를 전달합니다.",
  "Coordinate / RN-37.7749": "좌표 / RN-37.7749",
  "RN field console": "RN 작업 콘솔",
  "Signals live": "신호 확인 중",
  "read-only first": "읽기 전용 우선",
  "typed / generated": "타입 / 생성",
  "Operating posture": "작업 원칙",
  "Inspect the real project. Keep weak evidence weak. Make every change reviewable.":
    "실제 프로젝트를 살펴봅니다. 약한 근거를 과장하지 않습니다. 모든 변경은 검토할 수 있어야 합니다.",
  "Module directory": "모듈 목록",
  "One agent layer. Three deterministic tools.": "에이전트 하나. 정밀한 도구 셋.",
  "The agent kit drives the maintenance loop and calls the tools underneath it. Each tool below also runs on its own, from a public source, with no agent involved.":
    "에이전트 키트가 유지보수 흐름을 이끌고 필요한 도구를 호출합니다. 각 도구는 공개 소스로 제공되며, 에이전트 없이도 독립적으로 실행할 수 있습니다.",
  "Agentic layer": "에이전트 레이어",
  "Deterministic tools": "결정론적 도구",
  "Trust contract": "신뢰의 원칙",
  "Evidence before confidence.": "확신보다 먼저, 근거.",
  "Deterministic core": "재현 가능한 결과",
  "Generators and audits operate on explicit project inputs so their output can be reproduced and reviewed.":
    "생성과 점검은 명확한 프로젝트 입력을 바탕으로 동작합니다. 결과를 재현하고 검토할 수 있습니다.",
  "Conservative truth": "과장 없는 판단",
  "Missing evidence stays unknown or needs-review. The tools avoid turning weak signals into confident claims.":
    "근거가 부족하면 unknown 또는 needs-review로 남깁니다. 약한 신호를 확실한 사실처럼 표현하지 않습니다.",
  "Reviewable change": "검토 가능한 변경",
  "Agent skills inspect first. Any mutation requires consent and leaves the resulting diff visible for review.":
    "에이전트 스킬은 먼저 점검합니다. 변경에는 동의가 필요하며, 결과는 diff로 확인할 수 있습니다.",
  "Workflow rail": "작업 흐름",
  "Enter the loop where the uncertainty is.": "막히는 지점부터 시작하세요.",
  "This is a map, not a mandatory suite. Start with the problem in front of you and use the smallest module that can expose or remove it.":
    "모든 도구를 도입할 필요는 없습니다. 지금 마주한 문제부터, 그 문제를 드러내거나 해결할 수 있는 가장 작은 모듈로 시작하세요.",
  "Read the project": "프로젝트 파악",
  "Snapshot project facts before choosing a deeper maintenance workflow.":
    "깊이 있는 유지보수에 앞서 프로젝트의 현재 상태를 기록합니다.",
  "Normalize the inputs": "입력 정규화",
  "Make assets addressable by typed names and audit what the app no longer uses.":
    "에셋을 타입이 있는 이름으로 참조하고, 더 이상 쓰지 않는 파일을 찾습니다.",
  "Expose migration risk": "전환 위험 점검",
  "Classify New Architecture signals conservatively without changing project files.":
    "프로젝트 파일을 바꾸지 않고 New Architecture 관련 신호를 보수적으로 분류합니다.",
  "Shape the interface": "인터페이스 구현",
  "Turn a selected Figma subtree into React Native and NativeWind component code.":
    "선택한 Figma 하위 트리를 React Native와 NativeWind 컴포넌트 코드로 변환합니다.",
  "Field record / public run": "실행 기록 / 공개 사례",
  "A real audit. Zero files changed.": "실제 점검. 파일 변경은 0개.",
  "The rn-newarch-audit skill ran the New Architecture readiness audit against Rocket.Chat's React Native client. It read the manifest, the installed dependencies, and the app's own native sources, then named five app-local native modules still on legacy APIs — with the New Architecture flag already switched on.":
    "rn-newarch-audit 스킬로 Rocket.Chat의 React Native 클라이언트를 점검했습니다. 매니페스트와 설치된 의존성, 앱의 네이티브 소스를 읽고, New Architecture가 이미 활성화된 상태에서도 레거시 API를 사용하는 앱 내부 모듈 5개를 찾아냈습니다.",
  "Project": "프로젝트",
  "Date": "날짜",
  "Tool": "도구",
  "Files changed": "변경된 파일",
  "Read the full example": "전체 실행 사례 읽기",
  "Abridged. The full run also lists the 4 archived dependencies and the 5 app-local native modules by path, and exits 1 on a needs-review verdict so the same command works as a CI gate.":
    "일부 내용을 발췌했습니다. 전체 결과에는 보관 처리된 의존성 4개와 앱 내부 네이티브 모듈 5개의 경로가 포함됩니다. needs-review 판정 시 종료 코드 1을 반환하므로 같은 명령을 CI 검증에도 사용할 수 있습니다.",
  "First recommended module / 01": "첫 추천 모듈 / 01",
  "Put an audit-first agent on the React Native maintenance loop.": "유지보수의 시작을 점검부터.",
  "Explore RN Agents Kit": "RN Agents Kit 살펴보기",
  "View all public work": "공개 프로젝트 보기",
  "Agent workflow": "에이전트 워크플로",
  "Asset pipeline": "에셋 파이프라인",
  "Migration audit": "마이그레이션 점검",
  "Design codegen": "디자인 코드 생성",
  "Ten audit-first agent skills for inspecting, maintaining, and verifying React Native projects.":
    "React Native 프로젝트의 점검, 유지보수, 검증을 위한 10가지 점검 우선 에이전트 스킬입니다.",
  "Generate typed registries for images, SVGs, and Lottie files, then audit and reorganize assets safely.":
    "이미지, SVG, Lottie 파일의 타입 레지스트리를 생성하고, 에셋을 안전하게 점검하고 정리합니다.",
  "Read a project's local native signals and report what still needs review before a New Architecture migration.":
    "프로젝트의 로컬 네이티브 신호를 읽고, New Architecture 전환 전에 검토해야 할 내용을 정리합니다.",
  "Convert a Figma selection into React Native and NativeWind component code through a deterministic pipeline.":
    "결정론적 파이프라인으로 Figma 선택 영역을 React Native와 NativeWind 컴포넌트 코드로 변환합니다.",
  "v0.2.1 · Public": "v0.2.1 · 공개",
  "Public · MIT": "공개 · MIT",
  "npm package": "npm 패키지",
  "MODULE /": "모듈 /",
  "Open module": "모듈 보기",
  "Start here": "시작하기",
  "Live field notes": "작업 노트",
  "Public surface": "공개 기능",
  "Focused tools for the parts of React Native work that deserve deterministic output, conservative reporting, and reviewable evidence.":
    "재현 가능한 결과, 과장 없는 보고, 검토 가능한 근거. React Native 유지보수에 꼭 필요한 도구를 모았습니다.",
  "Built for React Native maintenance": "React Native 유지보수를 위한 도구",
  "Public facts · Direct links · Source-backed copy": "공개된 사실 · 직접 연결 · 출처 기반 설명",
  "Toolkit footer navigation": "하단 도구 탐색",
  "Give your coding agent a React Native maintenance kit that reads first and earns every change.":
    "먼저 읽고, 근거가 있을 때 바꾸는 React Native 유지보수 키트.",
  "The public v0.2.1 release packages ten narrow skills. Each one owns a specific maintenance job and keeps evidence, consent, and review boundaries explicit.":
    "공개된 v0.2.1에는 10가지 전문 스킬이 담겨 있습니다. 각 스킬은 하나의 유지보수 작업을 맡고, 근거와 동의, 검토의 경계를 명확히 지킵니다.",
  "read-only": "읽기 전용",
  "explicit consent": "명시적 동의",
  "project gates": "프로젝트 검증",
  "reviewable diff": "검토 가능한 diff",
  "Install / Claude Code": "설치 / Claude Code",
  "Two commands. Ten focused skills.": "명령 두 줄. 스킬 열 가지.",
  "Add the public marketplace, then install the v0.2.1 plugin from that source. The public README currently documents this Claude Code installation path.":
    "공개 마켓플레이스를 추가한 다음 v0.2.1 플러그인을 설치하세요. 현재 공개 README에서 안내하는 Claude Code 설치 방식입니다.",
  "The public distribution is licensed under Apache-2.0 and contains the shipped skills, plugin manifests, changelog, contribution guide, and example artifacts.":
    "공개 배포본은 Apache-2.0 라이선스를 따릅니다. 스킬, 플러그인 매니페스트, 변경 이력, 기여 가이드, 예제 결과물이 포함됩니다.",
  "Skill inventory / 10": "스킬 목록 / 10",
  "One skill, one maintenance job.": "하나의 스킬, 하나의 역할.",
  "Capture the project's React Native version, architecture and Hermes flags, package manager, and key configuration before choosing a deeper audit.":
    "상세 점검에 앞서 React Native 버전, 아키텍처와 Hermes 설정, 패키지 매니저, 주요 구성을 기록합니다.",
  "Find unused images, SVGs, and Lottie files, then guide an explicitly approved migration to a typed registry.":
    "사용하지 않는 이미지, SVG, Lottie 파일을 찾고, 명시적 승인 후 타입 레지스트리로의 전환을 안내합니다.",
  "Classify dependency and app-local native signals that matter when evaluating New Architecture readiness.":
    "New Architecture 준비 상태를 평가하는 데 필요한 의존성과 앱 내부 네이티브 신호를 분류합니다.",
  "Run a focused React Native code-quality audit and adversarially verify findings before they reach the report.":
    "React Native 코드 품질을 집중 점검하고, 발견 사항을 반대 관점에서 재검증한 뒤 보고합니다.",
  "Capture an Android or iOS simulator screen to a stable path so the agent can inspect the rendered app.":
    "Android 또는 iOS 시뮬레이터 화면을 일정한 경로에 저장해 에이전트가 실제 렌더링을 확인할 수 있게 합니다.",
  "Read bounded console output from Metro's CDP endpoint to close the runtime verification loop.":
    "Metro의 CDP 엔드포인트에서 제한된 범위의 콘솔 출력을 읽어 런타임 검증을 마무리합니다.",
  "Route runtime acceptance evidence — screenshots, Metro logs, interactive QA — to the right surface, and name the authorization each one needs.":
    "스크린샷, Metro 로그, 대화형 QA 등 실행 검증 근거를 적절한 경로로 연결하고 각각에 필요한 권한을 명시합니다.",
  "Inventory where a GitHub Actions workflow declares its artifact evidence: app roots, dependency and build declarations, and artifact references.":
    "GitHub Actions 워크플로의 앱 루트, 의존성과 빌드 선언, 아티팩트 참조를 조사해 근거가 선언된 위치를 정리합니다.",
  "Resolve one EAS build profile and its extends chain from eas.json, rejecting missing profiles, cycles, and excessive depth.":
    "eas.json에서 EAS 빌드 프로필과 extends 연결을 해석합니다. 누락된 프로필, 순환 참조, 과도한 깊이는 거부합니다.",
  "Record the upgrade surface before a React Native or Expo version bump: installed versions, lockfile candidates, native ownership, and CI verification gaps.":
    "React Native나 Expo 버전을 올리기 전에 설치 버전, 잠금 파일 후보, 네이티브 코드 소유 범위, CI 검증의 빈틈을 기록합니다.",
  "Read-only": "읽기 전용",
  "Audit → consent": "점검 → 동의",
  "Read-only audit": "읽기 전용 점검",
  "Verified findings": "검증된 발견 사항",
  "Source read-only": "소스 변경 없음",
  "Bounded reader": "범위 제한 읽기",
  "Evidence router": "근거 경로 안내",
  "Read-only inventory": "읽기 전용 조사",
  "Profile resolver": "프로필 해석",
  "Pre-bump record": "업그레이드 전 기록",
  "Operating contract": "작업 원칙",
  "Audit-first is a sequence, not a badge.": "점검 우선은 구호가 아닌 순서.",
  "Inspect": "살펴보기",
  "Ask": "동의 구하기",
  "Gate": "검증하기",
  "The first pass reads the project and reports what it can prove.":
    "먼저 프로젝트를 읽고, 확인할 수 있는 사실을 보고합니다.",
  "A skill that can mutate waits for explicit consent before changing source.":
    "소스를 바꾸는 스킬은 명시적인 동의를 받은 뒤에 실행합니다.",
  "Approved changes run the target project's own type, lint, and test commands.":
    "승인된 변경은 해당 프로젝트의 타입 검사, 린트, 테스트 명령으로 검증합니다.",
  "The resulting git diff stays visible so the operator owns the final decision.":
    "변경 결과는 git diff로 남기고, 최종 결정은 사용자에게 맡깁니다.",
  "Reproducible evidence / public example": "재현 가능한 근거 / 공개 예제",
  "See the New Architecture audit run against a public app.": "공개 앱의 실제 점검 기록.",
  "Open the example": "예제 보기",
  "Review the repository": "저장소 살펴보기",
  "Audit New Architecture readiness without pretending an absent signal is proof of incompatibility.":
    "신호가 없다고 비호환은 아닙니다. 근거를 바탕으로 New Architecture 준비 상태를 점검하세요.",
  "The CLI reads local configuration and installed packages first, enriches uncertain dependencies with public directory data when online, and states what still requires human verification.":
    "CLI는 로컬 설정과 설치된 패키지를 먼저 읽습니다. 온라인에서는 불확실한 의존성을 공개 디렉터리 정보로 보완하고, 사람이 검증해야 할 부분을 명시합니다.",
  "local signal": "로컬 근거",
  "directory hint": "디렉터리 정보",
  "manual review": "직접 검토",
  "Install / npm": "설치 / npm",
  "Point it at the real project.": "실제 프로젝트에서 확인하세요.",
  "Run the human-readable audit in the current project, target another path, request JSON for automation, or stay fully local with offline mode.":
    "현재 프로젝트나 지정한 경로에서 점검을 실행하세요. 자동화에는 JSON 출력을, 로컬에서만 실행하려면 오프라인 모드를 사용할 수 있습니다.",
  "Audit surface / v1": "점검 범위 / v1",
  "Four evidence channels, one conservative report.": "네 가지 근거, 신중한 보고서.",
  "Project state": "프로젝트 상태",
  "Dependency signals": "의존성 신호",
  "Directory context": "디렉터리 정보",
  "App-local modules": "앱 내부 모듈",
  "Reads the React Native version and platform configuration to establish the project's current architecture state.":
    "React Native 버전과 플랫폼 설정을 읽어 현재 아키텍처 상태를 파악합니다.",
  "Inspects installed packages for native footprints and local codegenConfig evidence before consulting network data.":
    "네트워크 정보를 조회하기 전에 설치된 패키지의 네이티브 코드 흔적과 로컬 codegenConfig 근거를 확인합니다.",
  "Optionally enriches unknown native packages with attributed React Native Directory data and caches the result.":
    "필요하면 React Native Directory의 출처가 명시된 정보로 불확실한 패키지를 보완하고 결과를 캐시합니다.",
  "Scans app-owned Android and iOS native source for legacy-only module patterns that still need human review.":
    "앱의 Android와 iOS 네이티브 소스에서 직접 검토가 필요한 레거시 전용 모듈 패턴을 찾습니다.",
  "Signal vocabulary": "신호 읽는 법",
  "Unknown is an honest result.": "모른다는 것도 정직한 결과.",
  "The v0.x report shape may change. Migration and project mutation remain outside this CLI's scope.":
    "v0.x의 보고서 형식은 변경될 수 있습니다. 마이그레이션 실행과 프로젝트 변경은 이 CLI의 범위에 포함되지 않습니다.",
  "Status": "상태",
  "Evidence": "근거",
  "Operator action": "사용자 확인 사항",
  "Local codegenConfig signal": "로컬 codegenConfig 신호",
  "Strong local evidence": "강한 로컬 근거",
  "Public directory marks the library ready": "공개 디렉터리에서 준비 완료로 표시",
  "Verify the pinned version": "고정된 버전 확인",
  "Native footprint without a positive signal": "네이티브 흔적은 있으나 긍정적 신호 없음",
  "Manual review required": "직접 검토 필요",
  "No native footprint detected": "네이티브 코드 흔적 없음",
  "Outside migration risk": "전환 위험 범위 밖",
  "Declared package is unresolved": "선언된 패키지를 찾을 수 없음",
  "Install before classifying": "설치 후 분류",
  "Deterministic layer → judgment layer": "결정론적 도구 → 판단 레이어",
  "Need interpretation around the report?": "보고서 해석이 필요하다면.",
  "The public rn-newarch-audit skill wraps this CLI with an audit-first agent workflow.":
    "공개된 rn-newarch-audit 스킬은 이 CLI를 점검 우선 에이전트 워크플로로 연결합니다.",
  "Open RN Agents Kit": "RN Agents Kit 보기",
  "Review the CLI": "CLI 살펴보기",
  "Turn the selected Figma subtree into React Native code without turning the design handoff into guesswork.":
    "선택한 Figma 디자인을 React Native 코드로. 디자인 전달 과정에서 추측을 줄이세요.",
  "The conversion core operates on a plain intermediate representation. React Native and NativeWind are the first-class output; naming and structural cleanup can optionally use an assisted pass.":
    "변환 코어는 단순한 중간 표현을 기반으로 동작하며 React Native와 NativeWind 코드를 생성합니다. 이름과 구조를 다듬는 보조 단계는 선택 사항입니다.",
  "extract": "추출",
  "normalize": "정규화",
  "deterministic": "결정론적 변환",
  "preview + copy": "미리보기 + 복사",
  "Conversion pipeline": "변환 파이프라인",
  "Selection in. Reviewable component out.": "선택한 디자인이 컴포넌트로.",
  "The Figma-dependent extraction stays at the edge. Mapping and generation remain isolated from the host runtime so the core behavior can be tested against plain IR.":
    "Figma에 의존하는 추출 단계는 외부 경계에 둡니다. 매핑과 생성은 호스트 런타임과 분리되어 있어 순수한 중간 표현(IR)만으로 핵심 동작을 테스트할 수 있습니다.",
  "Extract selection": "선택 영역 추출",
  "Build the IR": "중간 표현 생성",
  "Map styles": "스타일 매핑",
  "Generate code": "코드 생성",
  "Read the selected Figma subtree, Auto Layout, spacing, color, and text data.":
    "선택한 Figma 하위 트리의 Auto Layout, 간격, 색상, 텍스트 정보를 읽습니다.",
  "Normalize the selection into an intermediate representation outside the renderer.":
    "선택 영역을 렌더러와 분리된 중간 표현으로 정규화합니다.",
  "Map layout and style properties to NativeWind utilities through explicit rules.":
    "명확한 규칙에 따라 레이아웃과 스타일을 NativeWind 유틸리티로 변환합니다.",
  "Emit React Native components ready for preview, copy, and project integration.":
    "미리보기, 복사, 프로젝트 통합에 사용할 React Native 컴포넌트를 생성합니다.",
  "Current capability": "현재 지원 기능",
  "Deterministic where it matters. Assisted only when invited.":
    "규칙은 명확하게. 보조는 선택으로.",
  "Layout to utilities": "레이아웃을 유틸리티로",
  "Vector to JSX": "벡터를 JSX로",
  "Component extraction": "컴포넌트 추출",
  "Theme token mapping": "테마 토큰 매핑",
  "Optional cleanup pass": "선택적 코드 정리",
  "Two Figma surfaces": "두 가지 Figma 인터페이스",
  "Auto Layout, spacing, color, and text properties feed the deterministic NativeWind mapping pipeline.":
    "Auto Layout, 간격, 색상, 텍스트 속성을 결정론적 NativeWind 매핑 파이프라인에 전달합니다.",
  "Vector nodes export through Figma and become react-native-svg JSX in the generated component.":
    "벡터 노드를 Figma에서 내보내 생성된 컴포넌트의 react-native-svg JSX로 변환합니다.",
  "Repeated subtrees can be hoisted into sub-components instead of duplicating the same generated structure.":
    "반복되는 하위 트리를 별도 컴포넌트로 추출해 같은 구조의 중복 생성을 줄입니다.",
  "An imported Tailwind or CSS theme can map design colors back to named project tokens.":
    "Tailwind 또는 CSS 테마를 가져와 디자인 색상을 프로젝트의 이름 있는 토큰으로 연결할 수 있습니다.",
  "The rule-based result stands on its own; an optional assisted pass can refine naming and structure.":
    "규칙 기반 결과만으로도 사용할 수 있습니다. 선택적인 보조 단계로 이름과 구조를 다듬을 수 있습니다.",
  "Use the Dev Mode code generator or run the plugin with its preview-and-copy interface.":
    "Dev Mode 코드 생성기를 사용하거나, 미리보기와 복사 기능을 제공하는 플러그인을 실행하세요.",
  "Output boundary": "출력 범위",
  "React Native first.": "React Native를 중심으로.",
  "Current target": "현재 출력 대상",
  "Expo-compatible component output with NativeWind utility classes is the shipped, first-class renderer.":
    "현재 제공하는 기본 렌더러는 NativeWind 유틸리티 클래스를 사용하는 Expo 호환 컴포넌트를 생성합니다.",
  "Figma Community / public plugin": "Figma Community / 공개 플러그인",
  "Take the conversion loop into Figma.": "Figma에서 바로 시작하세요.",
  "Open the plugin": "플러그인 열기",
  "Review the source": "소스 살펴보기",
  "Stop shipping string-based asset paths. Generate the registry your React Native project can actually type-check.":
    "문자열 경로 대신 타입이 있는 에셋 참조. React Native 프로젝트가 검사할 수 있는 레지스트리를 생성하세요.",
  "Scan the asset tree, emit stable TypeScript constants and a manifest, then find unused files or rewrite stale references through explicit commands. The package ships no runtime dependencies and takes TypeScript as its only peer.":
    "에셋 트리를 읽어 일관된 TypeScript 상수와 매니페스트를 생성합니다. 명시적인 명령으로 미사용 파일을 찾거나 오래된 참조를 수정하세요. 런타임 의존성은 없으며, TypeScript만 피어 의존성으로 사용합니다.",
  "Brittle input": "불안정한 입력",
  "Typed output": "타입이 있는 출력",
  "Feature surface / 10": "기능 목록 / 10",
  "What the generator actually ships.": "생성기가 제공하는 기능.",
  "Each entry below maps to a command, a flag, or a file the CLI writes.":
    "각 기능은 CLI의 명령, 옵션 또는 생성 파일에 대응합니다.",
  "Zero-config setup": "설정 없이 시작",
  "Three built-in asset types": "세 가지 기본 에셋 타입",
  "Deterministic output": "일관된 출력",
  "Collision detection": "충돌 감지",
  "Manifest-backed audit": "매니페스트 기반 점검",
  "Automatic source rewriting": "소스 참조 자동 수정",
  "Content-hash diffing": "콘텐츠 해시 비교",
  "Asset organization": "에셋 구조 정리",
  "Fully configurable": "유연한 설정",
  "Programmatic API": "프로그래밍 API",
  "Works out of the box with the default src/assets layout. No configuration required for standard React Native projects.":
    "기본 src/assets 구조에서 바로 동작합니다. 표준 React Native 프로젝트라면 별도 설정이 필요 없습니다.",
  "Native support for images (PNG/JPG/WebP), SVGs, and Lottie animations (JSON). Each type gets its own typed export.":
    "이미지(PNG/JPG/WebP), SVG, Lottie 애니메이션(JSON)을 기본 지원하며, 각 타입별로 타입이 지정된 export를 생성합니다.",
  "Generated files are stable across runs and friendly to code review. Keys are sorted alphabetically for consistent diffs.":
    "실행할 때마다 일관된 파일을 생성합니다. 키를 알파벳순으로 정렬해 diff와 코드 검토가 쉬워집니다.",
  "Files that normalize to the same key (harini-cry.png and harini_cry.png, for example) are caught at generation time with clear errors.":
    "harini-cry.png와 harini_cry.png처럼 같은 키로 정규화되는 파일을 생성 시점에 감지하고 명확한 오류를 표시합니다.",
  "The audit command compares the manifest against the scanned source roots, reports every unreferenced asset, and deletes them on request.":
    "audit 명령은 매니페스트와 소스의 참조를 비교해 미사용 에셋을 보고하고, 요청 시 삭제합니다.",
  "The generate --inplace command rewrites every require() call and stale dotted reference in the project's source files.":
    "generate --inplace 명령은 소스 파일의 require() 호출과 오래된 점 표기 참조를 수정합니다.",
  "Each manifest entry carries a SHA-1 hash, enabling the codemod to track files that move or are renamed without content changes.":
    "매니페스트 항목마다 SHA-1 해시를 기록해, 내용이 바뀌지 않은 파일의 이동이나 이름 변경을 추적합니다.",
  "The organize command migrates flat or legacy asset directories into canonical subdirectories (images/, svgs/, lotties/).":
    "organize 명령은 평면 구조나 레거시 에셋 디렉터리를 표준 하위 디렉터리(images/, svgs/, lotties/)로 정리합니다.",
  "Override paths, export names, TypeScript type imports, or add entirely new asset types through rn-typed-assets.config.js.":
    "rn-typed-assets.config.js에서 경로, export 이름, TypeScript 타입 import를 변경하거나 새로운 에셋 타입을 추가하세요.",
  "Every function is exported, so the generation pipeline can run from a build script instead of the CLI.":
    "모든 함수를 export하므로 CLI 대신 빌드 스크립트에서 생성 파이프라인을 실행할 수 있습니다.",
  "Generation pipeline / 04": "생성 파이프라인 / 04",
  "Scan, normalize, build, emit.": "탐색부터 출력까지, 네 단계.",
  "The same asset directory produces the same registry on every run, which is what makes the output reviewable in a diff.":
    "같은 에셋 디렉터리는 매번 같은 레지스트리를 만듭니다. 그래서 결과를 diff로 검토할 수 있습니다.",
  "Scan": "탐색",
  "Normalize": "정규화",
  "Build the registry tree": "레지스트리 트리 구성",
  "Emit": "출력",
  "For each enabled asset type, recursively list files under the configured rootDir.":
    "활성화한 에셋 타입별로 rootDir 아래 파일을 재귀적으로 탐색합니다.",
  "Convert each filename to a stable camelCase key, resolving numeric prefixes and collisions.":
    "파일명을 일관된 camelCase 키로 바꾸고 숫자 접두사와 충돌을 처리합니다.",
  "Assemble a nested object tree from path segments, detecting and resolving branch and leaf collisions.":
    "경로 조각으로 중첩 객체 트리를 구성하고, 브랜치와 리프의 충돌을 감지해 처리합니다.",
  "Write assets.gen.ts as a typed const object and assets.manifest.json as a stable index of every key to file mapping.":
    "타입이 지정된 const 객체를 assets.gen.ts로, 키와 파일의 대응 관계를 assets.manifest.json으로 저장합니다.",
  "Example asset tree": "에셋 트리 예시",
  "Key normalization rules": "키 정규화 규칙",
  "Filenames become identifiers through fixed rules rather than per-project conventions, so two developers regenerating the same tree get the same keys.":
    "프로젝트별 관례가 아닌 고정 규칙으로 파일명을 식별자로 변환합니다. 누가 다시 생성해도 같은 트리에서 같은 키를 얻습니다.",
  "Filename": "파일명",
  "Generated key": "생성된 키",
  "Generated output": "생성 결과",
  "n1 (numeric prefix → n)": "n1 (숫자 접두사 → n)",
  "point.png alongside point/ dir": "point.png와 point/ 디렉터리 공존",
  "pointAsset (collision)": "pointAsset (충돌 처리)",
  "Keys are sorted, types are imported per asset type, and the whole object is const so TypeScript narrows every reference.":
    "키를 정렬하고 에셋 종류별 타입을 import합니다. 전체 객체를 const로 선언해 TypeScript가 각 참조의 타입을 좁힐 수 있습니다.",
  "Quick start / 05": "빠른 시작 / 05",
  "Five steps to a typed registry.": "타입 레지스트리까지 다섯 단계.",
  "Install as a dev dependency, run the generator, then replace require() paths with named constants.":
    "개발 의존성으로 설치하고 생성기를 실행한 뒤, require() 경로를 이름 있는 상수로 바꾸세요.",
  "What the registry changes": "레지스트리가 바꾸는 것",
  "Missing assets fail at generation, not at runtime.":
    "누락된 에셋을 런타임이 아닌 생성 시점에 발견합니다.",
  "Every asset key is an autocompletable TypeScript constant.":
    "모든 에셋 키를 자동 완성되는 TypeScript 상수로 사용합니다.",
  "Renamed files are re-keyed and their references rewritten.":
    "파일명이 바뀌면 키와 참조를 함께 갱신합니다.",
  "Unused assets surface in the audit and are removable from it.":
    "점검에서 미사용 에셋을 확인하고 삭제할 수 있습니다.",
  "STEP /": "단계 /",
  "Install the package": "패키지 설치",
  "Add scripts to package.json": "package.json 스크립트 추가",
  "Run the generator": "생성기 실행",
  "Import and use": "가져와서 사용",
  "Audit for unused assets": "미사용 에셋 점검",
  "Add rn-typed-assets as a dev dependency. The project needs TypeScript available; most React Native projects already have it.":
    "rn-typed-assets를 개발 의존성으로 추가하세요. TypeScript가 필요하며 대부분의 React Native 프로젝트에는 이미 설치되어 있습니다.",
  "Declare the generation, organization, and audit commands once as npm scripts.":
    "생성, 정리, 점검 명령을 npm 스크립트로 등록하세요.",
  "Execute the generate command to create assets.gen.ts and assets.manifest.json in src/generated/.":
    "generate 명령으로 src/generated/에 assets.gen.ts와 assets.manifest.json을 생성하세요.",
  "Import the typed registry and use named constants instead of require() paths.":
    "타입 레지스트리를 import하고 require() 경로 대신 이름 있는 상수를 사용하세요.",
  "Run the audit to list unreferenced assets, then delete them in the same command.":
    "audit로 참조되지 않는 에셋을 확인하세요. 삭제 옵션도 같은 명령에서 사용할 수 있습니다.",
  "CLI reference / 03": "CLI 레퍼런스 / 03",
  "Generate, organize, audit.": "생성, 정리, 점검.",
  "Three commands cover the whole surface. Each one lists its options and the default it falls back to when the flag is absent.":
    "세 가지 명령으로 모든 기능을 사용합니다. 각 명령의 옵션과 생략 시 적용되는 기본값을 확인하세요.",
  "Scan asset directories and emit assets.gen.ts + assets.manifest.json.":
    "에셋 디렉터리를 탐색해 assets.gen.ts와 assets.manifest.json을 생성합니다.",
  "Comma-separated asset types": "쉼표로 구분한 에셋 타입",
  "Rewrite source files after regen": "재생성 후 소스 파일 수정",
  "Project root directory": "프로젝트 루트 디렉터리",
  "Path to config file": "설정 파일 경로",
  "Move asset files into canonical subdirectories, then regenerate and rewrite sources.":
    "에셋을 표준 하위 디렉터리로 옮긴 뒤 다시 생성하고 소스 참조를 수정합니다.",
  "(required)": "(필수)",
  "Path to the asset root to organize": "정리할 에셋 루트 경로",
  "Asset types to move": "이동할 에셋 타입",
  "Creates: images/, svgs/, lotties/ subdirectories": "생성 디렉터리: images/, svgs/, lotties/",
  "Compare manifest against actual source-file usages.":
    "매니페스트와 소스 파일의 실제 사용 내역을 비교합니다.",
  "Asset types to audit": "점검할 에셋 타입",
  "Delete unused files and regenerate": "미사용 파일 삭제 후 재생성",
  "Flag": "옵션",
  "Description": "설명",
  "Default": "기본값",
  "Examples": "예시",
  "Configuration / optional": "설정 / 선택 사항",
  "Zero config by default, explicit when overridden.": "기본은 간단하게. 설정은 명확하게.",
  "The defaults cover the standard layout. A config file at the project root replaces only the fields it names, so omitting it accepts every default.":
    "기본값으로 표준 구조를 지원합니다. 프로젝트 루트의 설정 파일에 명시한 항목만 덮어쓰며, 파일을 생략하면 모든 기본값을 사용합니다.",
  "Full configuration": "전체 설정",
  "Adding custom types": "사용자 정의 타입 추가",
  "Configuration options": "설정 옵션",
  "Every field below is an override. The commented value is what the CLI uses when the field is absent.":
    "아래 항목은 모두 변경할 수 있습니다. 주석의 값은 해당 항목을 생략했을 때 CLI가 사용하는 기본값입니다.",
  "Any type outside the three defaults can be declared under types. The audit command discovers it automatically through the exportName to type reverse map.":
    "세 가지 기본 타입 외에도 types 아래에 타입을 선언할 수 있습니다. audit 명령은 exportName에서 타입으로의 역매핑을 통해 이를 자동으로 찾습니다.",
  "Directory for generated files": "생성 파일을 저장할 디렉터리",
  "Files and directories scanned by the audit command": "audit 명령이 탐색할 파일과 디렉터리",
  "Asset scan root for each type": "타입별 에셋 탐색 루트",
  "File extensions to include": "포함할 파일 확장자",
  "Name of the exported constant": "export할 상수 이름",
  "TypeScript type configuration": "TypeScript 타입 설정",
  "CI integration / 02": "CI 연동 / 02",
  "Fail the build when the manifest drifts.": "매니페스트 불일치도 CI에서.",
  "Regenerate in CI and diff the output, or regenerate on commit and stage it. Both catch the same drift between the manifest and the filesystem.":
    "CI에서 재생성한 결과를 비교하거나, 커밋할 때 재생성하고 스테이징하세요. 두 방식 모두 매니페스트와 파일 시스템의 차이를 잡아냅니다.",
  "Regenerates the registry in CI and fails the job when the committed output differs from what the current asset tree produces.":
    "CI에서 레지스트리를 재생성하고, 커밋된 결과와 현재 에셋 트리의 출력이 다르면 작업을 실패 처리합니다.",
  "Regenerates and stages the registry on every commit through a Husky git hook, so the manifest never lags the filesystem.":
    "Husky Git 훅으로 커밋할 때마다 레지스트리를 재생성하고 스테이징해 매니페스트를 파일 시스템과 맞춥니다.",
  "Asset pipeline / ready": "에셋 파이프라인 / 준비 완료",
  "Replace the next brittle asset path before it ships.": "불안정한 경로는 배포 전에.",
  "Install the generator as a development dependency, generate the registry, and let TypeScript carry the asset names from there.":
    "생성기를 개발 의존성으로 설치하고 레지스트리를 만드세요. 이후 에셋 이름은 TypeScript에 맡기면 됩니다.",
};
