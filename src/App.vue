<script setup lang="ts">
  import { projectProp } from '@/code/data';
</script>

<template>
  <header>
    <h1>{{ projectProp.title }}</h1>
  </header>

  <main>
    <section>
      <h2>Portfolio</h2>
      <p>
        This very project. Very minimal, as nothing is needed besides list of all projects that I created.
      </p>
      <p>
        Tech stack: Vue
      </p>
      <p>
        Webpage: <a href="https://pawel-papierkowski.github.io/portfolio" target="_blank" rel="noopener">https://pawel-papierkowski.github.io/portfolio</a>
      </p>
      <p>
        Repository: <a href="https://github.com/pawel-papierkowski/portfolio" target="_blank" rel="noopener">https://github.com/pawel-papierkowski/portfolio</a>
      </p>
    </section>
    <section>
      <h2>Tic-Tac-Toe</h2>
      <p>
        Simple Vue project implementing tic-tac-toe game. Fully functional, including:
        <ul>
          <li>human vs human or human vs AI</li>
          <li>difficulty levels, including perfect gameplay (implementing miniMax algorithm)</li>
        </ul>
      </p>
      <p>
        Tech stack: Vue
      </p>
      <p>
        Webpage: <a href="https://pawel-papierkowski.github.io/portfolio" target="_blank" rel="noopener">https://pawel-papierkowski.github.io/portfolio</a>
      </p>
      <p>
        Repository: <a href="https://github.com/pawel-papierkowski/portfolio" target="_blank" rel="noopener">https://github.com/pawel-papierkowski/portfolio</a>
      </p>
    </section>
  </main>

  <footer>
    <p>Repository: <a href="https://github.com/pawel-papierkowski/portfolio" target="_blank">https://github.com/pawel-papierkowski/portfolio</a></p>
    <p>&copy; {{ projectProp.dateRange }} {{ projectProp.author }} | v. {{ projectProp.version }} {{ projectProp.build }}</p>
  </footer>
</template>

<style scoped>
footer {
  font-size: 11px;
  text-align: center;
  margin: 4px;
}
</style>
