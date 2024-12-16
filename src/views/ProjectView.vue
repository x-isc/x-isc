<template>
    <div class="project-page">
      <!-- Navigation Bar -->
      <el-menu
        mode="horizontal"
        :background-color="'rgb(140, 21, 21)'"
        text-color="#fff"
        active-text-color="#fff"
      >
        <el-menu-item index="/">
          <span style="font-weight: 800">X-ISC</span>
        </el-menu-item>
        <el-menu-item @click="scrollToSection('abstract')">Abstract</el-menu-item>
        <el-menu-item @click="scrollToSection('failure')">Failure of Intrinsic Self-Correction</el-menu-item>
        <el-menu-item @click="scrollToSection('interpretation')">Interpretation</el-menu-item>
        <el-menu-item @click="scrollToSection('alleviation')">Alleviation</el-menu-item>
        <el-menu-item @click="scrollToSection('resources')">Resources</el-menu-item>
      </el-menu>
  
      <!-- Header Section -->
      <div class="container header">
        <h2 class="title">Understanding the Dark Side of LLMs' Intrinsic Self-Correction</h2>
        <h4 class="subtitle">Interpreting and Mitigating Self-Correction Failures in State-of-the-Art LLMs</h4>
        
        <div class="author-info">
          <span>Anonymous submission</span>
        </div>
  
        <!-- 添加 GitHub 链接按钮 -->
        <div class="github-link-container">
          <a href="https://anonymous.4open.science/r/SC-15FB/" 
             class="github-button"
             target="_blank">
            <i class="github-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
            </i>
            <span>Project Code</span>
          </a>
        </div>
      </div>
  
      <!-- Main Content -->
      <div class="container main-content">
        <el-row justify="center">
          <el-col :span="20">
            <!-- Abstract Section -->
            <div class="section" id="abstract">
              <h3>
                <span class="section-title">Abstract</span>
              </h3>
              <div class="section-content">
                <el-row :gutter="20">
                    <el-col :span="1"></el-col>
                  <el-col :span="11">
                    <p>
                      Intrinsic self-correction was proposed to refine LLMs' responses via feedback prompts solely based on their inherent capability to improve their performance. However, recent works show that intrinsic self-correction fails without oracle labels as feedback prompts. In this paper, our goal is to investigate the question of how to interpret LLMs' intrinsic self-correction in different tasks. By including simple factual questions and three complex tasks with state-of-the-art (SOTA) LLMs like ChatGPT families (o1, 4o, 3.5-turbo) and Llama families (2-7B, 3-8B, and 3.1-8B), we achieve our goal by designing three interpretation methods to reveal the dark side of LLMs' intrinsic self-correction. We identify intrinsic self-correction can (1) cause LLMs to waver both intermediate and final answers and lead to prompt bias on simple factual questions; (2) introduce human-like cognitive bias on complex tasks. In light of our findings, we also provide two simple, low-cost, yet effective strategies for alleviation: question repeating and supervised fine-tuning.
                    </p>
                  </el-col>
                <el-col :span="10">
                    <img 
                        src="@/figures/overviewf3.png" 
                        alt="Overview" 
                        class="responsive-image abstract-image"
                    />
                    </el-col>
                </el-row>
              </div>
            </div>
  
            <!-- Failure of Intrinsic Self-Correction Section -->
            <div class="section" id="failure">
              <h3>
                <span class="section-title">Failure of Intrinsic Self-Correction</span>
              </h3>
              <div class="section-content">
                <p>
                  Intrinsic self-correction mechanisms in state-of-the-art LLMs were expected to enhance performance by refining responses based solely on the model's inherent capabilities. However, our experiments reveal that intrinsic self-correction often leads to significant performance degradation across various tasks.
                </p>
  
                <!-- Experimental Tables Placeholder -->
                <h4>Experimental Results</h4>
                <p>Below are the key experimental results demonstrating the failures of intrinsic self-correction:</p>
                
                <!-- Example Table for Yes/No Question Answering Task -->
                <el-table :data="boolqData" style="width: 100%" border>
                  <el-table-column prop="model" label="Model" align="center">
                  </el-table-column>
                  <el-table-column prop="acc1" label="ACC₁ (↓ΔACC) (%)" align="center">
                  </el-table-column>
                  <el-table-column prop="overturned" label="✓→✗ (%)" align="center">
                    <template #default="scope">
                      {{ scope.row.overturned }}
                    </template>
                  </el-table-column>
                </el-table>
                
                <p class="table-caption">Table 1: Self-correction performance on the Yes/No question answering task.</p>
  
                <!-- Additional Tables for Complex Tasks -->
                <!-- Repeat similar <el-table> components for other tasks as needed -->
                
                <!-- Observation 1 -->
                <div class="observation-box">
                  <strong>Observation 1:</strong> Self-correction can fail in diverse tasks. For SOTA LLMs, self-correction failures are reduced but not solved. They are even worse in certain tasks.
                </div>
              </div>
            </div>
  
            <!-- Interpretation Section -->
            <div class="section" id="interpretation">
              <h3>
                <span class="section-title">Interpretation</span>
              </h3>
              <div class="section-content">
                <p>
                  We propose three interpretation methods to understand how and why intrinsic self-correction fails in different tasks:
                </p>
  
                <!-- Method 1: Mechanistic Interpretability -->
                <div class="method-box">
                  <el-row :gutter="20">
                    <el-col :span="12">
                      <h4>1. Internal Answer Wavering</h4>
                      <p>
                        We analyze LLMs' internal token representations at each layer to track how confidence in different answers evolves. Our findings show that:
                      </p>
                      <ul>
                        <li>Self-correction increases internal answer wavering from 8.3% to 14.1%</li>
                        <li>Prompting with "Are you sure?" produces nearly identical confidence patterns as directly stating "You are wrong"</li>
                      </ul>
                    </el-col>
                    <el-col :span="12">
                      <img 
                        src="@/figures/internal_confidence.png" 
                        alt="Internal Confidence Analysis" 
                        class="method-image"
                      />
                    </el-col>
                  </el-row>
                  <div class="observation-box">
                    <strong>Observation 2:</strong> Self-correction causes internal answer wavering, which could further lead to wrong final answers. Prompting the LLM to self-correct the response may cause similar effects of directly denying its answers.
                  </div>
                </div>
  
                <!-- Method 2: Token Attribution -->
                <div class="method-box">
                  <el-row :gutter="20">
                    <el-col :span="11">
                      <h4>2. Token Attribution Analysis: Prompt Bias</h4>
                      <p>
                        Using our PACT (Prompt Attribution and Contribution Tracking) method, we measure how different parts of the input influence the model's decisions:
                      </p>
                      <ul>
                        <li>When correct answers are overturned, models show stronger attribution to refinement prompts</li>
                        <li>When correct answers are retained, models maintain focus on the original question</li>
                      </ul>
                    </el-col>
                    <el-col :span="1"></el-col>
                    <el-col :span="11">
                      <img 
                        src="@/figures/case.png" 
                        alt="Token Attribution Analysis" 
                        class="method-image"
                      />
                    </el-col>
                  </el-row>
                  <div class="observation-box">
                    <strong>Observation 3:</strong> Self-correction fails since LLMs are biased towards the refinement prompt rather than the original question. 
                  </div>
                </div>
  
                <!-- Method 3: Human-like Cognitive Bias -->
                <div class="method-box">
                  <el-row :gutter="20">
                    <el-col :span="11">
                      <h4>3. Human-like Cognitive Bias Analysis</h4>
                      <p>
                        In complex tasks, we identify three types of human-like cognitive biases that emerge during self-correction:
                      </p>
                      <ul>
                        <li><strong>Overthinking:</strong> Excessive reasoning without taking correct actions (avg. 15.4 vs 5.3 "think" steps)</li>
                        <li><strong>Cognitive Overload:</strong> Forgetting critical information when processing long prompts</li>
                        <li><strong>Perfectionism Bias:</strong> Over-optimization leading to constraint violations</li>
                      </ul>
                    </el-col>
                    <el-col :span="13">
                      <img 
                        src="@/figures/humanCognitiveBiasf.png" 
                        alt="Human Cognitive Biases" 
                        class="method-image"
                      />
                    </el-col>
                  </el-row>
                  <div class="observation-box">
                    <strong>Observation 4:</strong> In complex tasks, LLMs exhibit human-like cognitive biases during self-correction: (1) Overthinking: LLM performs excessive “think” without taking correct actions; (2) Cognitive overload: LLM forgets the correct command syntax when processing long prompt; (3) Perfectionism bias: LLM wants to be more efficient, but instead violates environmental restrictions.
                  </div>
                </div>
              </div>
            </div>
  
            <!-- Solutions Section -->
            <div class="section" id="alleviation">
              <h3>
                <span class="section-title">Alleviation</span>
              </h3>
              <div class="section-content">
                <p>
                  Based on our findings that self-correction failures are mainly due to model's behavior of changing answers when meeting refinement prompts, we propose two simple yet effective strategies:
                </p>
                <img src="@/figures/mergedMitigation2.png" alt="Question Repeating" class="responsive-image" />
  
                <!-- Mitigation Strategy 1: Question Repeating -->
                <div class="solution-item">
                  <h4>1. Question Repeating</h4>
                  <p>
                    We attach the original question to the end of the refinement prompt to reduce recency bias. For example:
                    "Are you sure? Think and answer again." → "Are you sure? Think and answer again. Is human a kind of animals?"
                  </p>
                </div>
  
                <!-- Mitigation Strategy 2: Supervised Fine-Tuning -->
                <div class="solution-item">
                  <h4>2. Low-cost Supervised Fine-Tuning (SFT)</h4>
                  <p>
                    We fine-tune models with extremely few samples (4 for Llama, 10 for GPT) selected from correct→wrong cases, without introducing external knowledge. The cost is only $0.004 and 3 minutes.
                  </p>
                </div>
  
                <!-- Results -->
                <h4>Key Results</h4>
                <ul>
                  <li>Both strategies significantly reduce self-correction failures in Yes/No questions</li>
                  <li>SFT almost eliminates all correct→wrong cases</li>
                  <li>Models fine-tuned on Yes/No questions can generalize to complex tasks</li>
                </ul>
  
                <!-- Results Tables -->
                <el-table :data="mitigateData" style="width: 100%" border>
                  <el-table-column prop="model" label="Model" align="center">
                  </el-table-column>
                  <el-table-column prop="acc1" label="ACC₁ (↓ΔACC) (%)" align="center">
                  </el-table-column>
                  <el-table-column prop="overturned" label="✓→✗ (%)" align="center">
                    <template #default="scope">
                      {{ scope.row.overturned }}
                    </template>
                  </el-table-column>
                </el-table>
                <p class="table-caption">Table 2: Alleviating self-correction failure on Yes/No question answering task.</p>
              </div>
            </div>
  
            <!-- Resources Section -->
            <div class="section" id="resources">
              <h3>
                <span class="section-title">Resources</span>
              </h3>
              <div class="section-content">
                <p>
                  Access our code repository through the following links:
                </p>
                <ul>
                  <li><a href="https://anonymous.4open.science/r/SC-15FB/" target="_blank">Project Code</a></li>
                </ul>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  // No additional scripts needed for static content
  
  // Sample Data for Tables
  const boolqData = [
    { 
      model: 'ChatGPT o1-preview', 
      acc1: '78.7 (↓4.9)', 
      overturned: '13.2' 
    },
    { 
      model: 'ChatGPT o1-mini', 
      acc1: '74.1 (↓4.2)', 
      overturned: '15.6' 
    },
    { 
      model: 'ChatGPT 4o', 
      acc1: '79.2 (↓4.9)', 
      overturned: '11.3' 
    },
    { 
      model: 'ChatGPT 3.5-turbo', 
      acc1: '62.5 (↓12.1)', 
      overturned: '34.0' 
    },
    { 
      model: 'Llama-3.1-8B', 
      acc1: '49.2 (↓20.4)', 
      overturned: '58.8' 
    },
    { 
      model: 'Llama-3-8B', 
      acc1: '50.1 (↓20.3)', 
      overturned: '58.2' 
    },
    { 
      model: 'Llama-2-7B', 
      acc1: '52.8 (↓8.7)', 
      overturned: '26.5' 
    }
  ];
  
  const mitigateData = [
    { model: 'GPT-4o', acc1: '79.2 (↓4.9)', overturned: '11.3' },
    { model: 'GPT-4o + Question repeating', acc1: '83.6 (↓0.5)', overturned: '6.0' },
    { model: 'GPT-4o + SFT', acc1: '87.7 (↑4.1)', overturned: '0' },
    { model: 'GPT-3.5-turbo', acc1: '62.5 (↓12.1)', overturned: '34.0' },
    { model: 'GPT-3.5-turbo + Question repeating', acc1: '67.4 (↓7.2)', overturned: '23.1' },
    { model: 'GPT-3.5-turbo + SFT', acc1: '76.2 (↑1.6)', overturned: '0' },
    { model: 'Llama-3.1-8B', acc1: '49.2 (↓20.4)', overturned: '58.8' },
    { model: 'Llama-3.1-8B + Question repeating', acc1: '52.4 (↓17.2)', overturned: '52.8' },
    { model: 'Llama-3.1-8B + SFT', acc1: '70.3 (↑0.7)', overturned: '0' }
  ];
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  </script>
  
  <style scoped>
  .project-page {
    min-height: 100vh;
    background-color: #fff;
  }
  
  .container {
    padding: 0 20px;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .header {
    text-align: center;
    padding: 20px 0 0 0;
  }
  
  .title {
    margin-bottom: 0;
    font-size: 2em;
    font-weight: normal;
  }
  
  .subtitle {
    color: rgb(140, 21, 21);
    margin-top: 5px;
    margin-bottom: 5px;
    font-weight: normal;
    font-size: 1.5em;
  }
  
  .section {
    margin: 15px 0;
    padding: 0px;
    background-color: transparent;
    border-radius: 0;
    box-shadow: none;
  }
  
  .section-title {
    color: rgb(140, 21, 21);
    font-size: 22px;
    display: block;
    margin-bottom: 10px;
    border-bottom: 2px solid rgb(140, 21, 21);
    padding-bottom: 6px;
  }
  
  .section-content {
    margin-top: 15px;
  }
  
  .observation-box {
    margin: 15px 0;
    padding: 12px;
    background-color: #f0f8ff;
    border-left: 4px solid rgb(140, 21, 21);
    border-radius: 4px;
  }
  
  .table-caption {
    text-align: center;
    font-size: 0.85em;
    color: #555;
    margin: 5px auto 15px;
    width: 80%;
  }
  
  .solution-item {
    margin-bottom: 15px;
    padding: 15px;
    background-color: #f8f8f8;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .solution-item h4 {
    color: rgb(140, 21, 21);
    margin-top: 0;
    margin-bottom: 10px;
  }
  
  .responsive-image {
    width: 100%;
    height: auto;
    margin-top: 15px;
    border-radius: 8px;
  }
  
  /* 移除之前的 overview 图片特殊样式 */
  #abstract .responsive-image {
    max-width: 100%;
    margin: 0;
  }
  
  /* 添加新的 abstract 图片样式 */
  .abstract-image {
    width: 100%;
    height: auto;
    display: block;
    margin: 15px 0;
  }
  
  /* 为双栏布局加响应式设计 */
  @media (max-width: 768px) {
    .finding-item, .method-item, .result-item, .solution-item {
      padding: 15px;
    }
  
    .section-title {
      font-size: 22px;
    }
  
    .title {
      font-size: 1.8em;
    }
  
    .subtitle {
      font-size: 1.3em;
    }
  
    #abstract .el-row {
      display: flex;
      flex-direction: column;
    }
  
    #abstract .el-col {
      width: 100%;
      margin-bottom: 20px;
    }
  }
  
  .github-link-container {
    text-align: center;
    margin: 10px 0 5px 0;
  }
  
  .github-button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background-color: rgb(140, 21, 21);
    color: white;
    padding: 8px 15px;
    border-radius: 20px;
    text-decoration: none;
    font-size: 14px;
    transition: background-color 0.3s;
  }
  
  .github-button:hover {
    background-color: rgb(120, 18, 18);
    color: white;
    text-decoration: none;
  }
  
  .github-icon {
    display: flex;
    align-items: center;
  }
  
  :deep(.el-menu-item) {
    font-size: 18px;  /* 增加字体大小 */
    font-weight: 400; /* 稍微加粗一点 */
  }
  
  :deep(.el-menu-item:first-child) {
    font-size: 20px;
    font-weight: 800;
  }
  
  /* 修改表格样式 */
  :deep(.el-table) {
    margin: 20px auto;
    width: 80% !important;
    font-size: 14px;
  }
  
  :deep(.el-table__header) {
    font-weight: bold;
    font-size: 14px;
  }
  
  :deep(.el-table__cell) {
    text-align: center !important;
    padding: 6px 0;
  }
  
  :deep(.el-table .cell) {
    padding: 4px;
    white-space: nowrap;
  }
  
  /* 调整标题和段落的间距 */
  h4 {
    margin-top: 15px;
    margin-bottom: 10px;
    font-size: 18px; /* 减小二级标题大小 */
  }
  
  p {
    margin: 8px 0; /* 减小段落间距 */
    line-height: 1.5; /* 减小行高 */
  }
  
  /* 添加新的样式类用于中等大小的图片 */
  .medium-image {
    width: 70%;  /* 设置为容器宽度的70% */
    display: block;
    margin: 15px auto;  /* 上下间距15px，左右自动居中 */
  }
  
  .method-box {
    margin: 25px 0;
    padding: 20px;
    background-color: #f8f8f8;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .method-box h4 {
    color: rgb(140, 21, 21);
    margin-top: 0;
    margin-bottom: 15px;
  }
  
  .method-image {
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-top: 10px;
  }
  
  /* 添加以下样式来调整列表项的左边距 */
  ul {
    padding-left: 20px; /* 减小默认的左边距 */
    margin: 8px 0;
  }
  
  li {
    margin: 4px 0; /* 调整列表项之间的垂直间距 */
  }
  
  /* 添加新的样式规则 */
  #abstract {
    margin-top: 0;
    padding-top: 0;
  }
  </style>
  