import MarkDown from '@/components/markdown'

const markdown = `# 主题定制
## 使用前必备
在你使用之前请确保您已经满足以下条件：
+ 您当前项目必须使用Taro框架进行开发
+ 您已经熟练掌握React相关技能
+ 您已正确安装Node.js版本`

export default function DocsPage() {
  return (
    <MarkDown markdown={ markdown } />
  );
}