import Link from "next/link"
import Layout from "../components/Layout"
import Index from '../components/pages/index'


// material-ui
import CssBaseline from '@material-ui/core/CssBaseline';

const IndexPage = () => (
  <Layout title="夜勤日誌アプリ">
    <CssBaseline />
    <Index />
  </Layout>
);

export default IndexPage;
