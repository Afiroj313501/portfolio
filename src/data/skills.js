import {
  FaPython, FaJava, FaJs, FaReact, FaNodeJs, FaHtml5, FaCss3Alt,
  FaGitAlt, FaGithub, FaLinux, FaDatabase,
} from 'react-icons/fa'
import { SiCplusplus, SiMongodb, SiExpress, SiTailwindcss, SiTensorflow, SiPytorch, SiOpencv, SiScikitlearn, SiMysql } from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'
import { SiIntellijidea } from 'react-icons/si'
import { BsRobot, BsCpu } from 'react-icons/bs'
import { TbBrain } from 'react-icons/tb'
import { AiOutlineNodeIndex } from 'react-icons/ai'

export const skillGroups = [
  {
    title: 'Programming Languages',
    id: 'languages',
    skills: [
      { name: 'Python', icon: FaPython },
      { name: 'Java', icon: FaJava },
      { name: 'JavaScript', icon: FaJs },
      { name: 'C++', icon: SiCplusplus },
      { name: 'SQL', icon: FaDatabase },
    ],
  },
  {
    title: 'AI / Machine Learning',
    id: 'ai-ml',
    skills: [
      { name: 'Machine Learning', icon: TbBrain },
      { name: 'Deep Learning', icon: BsCpu },
      { name: 'Computer Vision', icon: SiOpencv },
      { name: 'AI Agents', icon: BsRobot },
      { name: 'Large Language Models', icon: AiOutlineNodeIndex },
      { name: 'MCP', icon: AiOutlineNodeIndex },
      { name: 'PyTorch', icon: SiPytorch },
      { name: 'TensorFlow', icon: SiTensorflow },
      { name: 'OpenCV', icon: SiOpencv },
      { name: 'Scikit-learn', icon: SiScikitlearn },
    ],
  },
  {
    title: 'Web Development',
    id: 'web',
    skills: [
      { name: 'React', icon: FaReact },
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'Express.js', icon: SiExpress },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'HTML', icon: FaHtml5 },
      { name: 'CSS', icon: FaCss3Alt },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
    ],
  },
  {
    title: 'Tools',
    id: 'tools',
    skills: [
      { name: 'Git', icon: FaGitAlt },
      { name: 'GitHub', icon: FaGithub },
      { name: 'VS Code', icon: VscVscode },
      { name: 'IntelliJ IDEA', icon: SiIntellijidea },
      { name: 'MySQL', icon: SiMysql },
      { name: 'Linux', icon: FaLinux },
    ],
  },
]
