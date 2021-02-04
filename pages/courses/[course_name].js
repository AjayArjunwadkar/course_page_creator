import Link from 'next/link'
import { Section, Card, Content, Title, Field, Label, Control, Input, Textarea, Button } from 'rbx'
import Layout from '../../components/Layout'
import {fetchAPI} from '../../lib/utility'

const Course = ({ CourseData }) => (
    <Layout>
        <Section>

        </Section>
    </Layout>


 )

 export async function getStaticPaths() {
  const paths = ["python", "AI_ML"] // get list of courses from the strapi
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ course_name }) {
    
  const CourseData = await fetchAPI(course_name);
    
    return {
      props: {
        CourseData
      },
      revalidate: 1
    }
  }

  export default Course