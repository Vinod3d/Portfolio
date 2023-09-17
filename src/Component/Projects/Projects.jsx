import React, { useEffect, useState } from 'react';
import './Projects.css';
import '../Portfolio/Portfolio.css';
import ProjectsApi from './ProjectsApi';
import Card from './Card';
import Filter from './Filter';

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTech, setSelectedTech] = useState('');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Function to handle filter selection
  const handleFilterChange = (e) => {
    setSelectedTech(e.target.value);
  };

  useEffect(() => {
    // Simulate asynchronous loading
    setLoading(true);

    setTimeout(() => {
      // Filter and map the project items based on search and filter criteria
      const filteredByTech = ProjectsApi.filter((project) =>
        project.Tech.toLowerCase().includes(selectedTech.toLowerCase()),
        // setSearchQuery('')
      );

      const filteredBySearch = ProjectsApi.filter((value) =>
        value.title_one.toLowerCase().includes(searchQuery.toLowerCase()) ||
        value.title_two.toLowerCase().includes(searchQuery.toLowerCase()) ||
        value.title_three.toLowerCase().includes(searchQuery.toLowerCase()),

        // selectedTech('')
      );

      // Combine the two filters while ensuring there are no duplicates
      const newFilteredProjects = [...new Set([...filteredByTech, ...filteredBySearch])];

      setFilteredProjects(newFilteredProjects);
      setLoading(false); // Set loading to false when done
    }, 1000); // Simulating a delay for loading

  }, [searchQuery, selectedTech]);

  return (
    <>
      <section className='Portfolio Blog' id='blog'>
        <div className='container top'>
          <div className='heading text-center'>
            <h4>VISIT MY BLOG AND KEEP YOUR FEEDBACK</h4>
            <h1>My Blog</h1>
          </div>

          <div className='content grid'>
            <Filter
              searchQuery={searchQuery}
              selectedTech={selectedTech}
              onSearchChange={handleSearchChange}
              onFilterChange={handleFilterChange}
              numProjects={filteredProjects.length}
            />
            {loading ? (
              // Show loading spinner or message while data is loading
              <p>Loading...</p>
            ) : (
              filteredProjects.map((value) => {
                return (
                  <Card
                    key={value.id} // Use a unique identifier as the key
                    image={value.image}
                    date={value.date}
                    title_one={value.title_one}
                    title_two={value.title_two}
                    title_three={value.title_three}
                    desc_one={value.desc_one}
                    desc_two={value.desc_two}
                    desc_three={value.desc_three}
                  />
                );
              })
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
