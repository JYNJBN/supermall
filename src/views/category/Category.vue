<template>
  <div class="wrapper">
    <ul class="content">
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
      <li>11</li>
      <li>12</li>
      <li>13</li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
      <li>18</li>
      <li>19</li>
      <li>20</li>
      <li>21</li>
      <li>22</li>
      <li>23</li>
      <li>24</li>
      <li>25</li>
      <li>26</li>
      <li>27</li>
      <li>28</li>
      <li>29</li>
      <li>30</li>
      <li>31</li>
      <li>32</li>
      <li>33</li>
      <li>34</li>
      <li>35</li>
      <li>36</li>
      <li>37</li>
      <li>38</li>
      <li>39</li>
      <li>40</li>
      <li>41</li>
      <li>42</li>
      <li>43</li>
      <li>44</li>
      <li>45</li>
      <li>46</li>
      <li>47</li>
      <li>48</li>
      <li>49</li>
      <li>50</li>
      <li>51</li>
      <li>52</li>
      <li>53</li>
      <li>54</li>
      <li>55</li>
      <li>56</li>
      <li>57</li>
      <li>58</li>
      <li>59</li>
      <li>60</li>
      <li>61</li>
      <li>62</li>
      <li>63</li>
      <li>64</li>
      <li>65</li>
      <li>66</li>
      <li>67</li>
      <li>68</li>
      <li>69</li>
      <li>70</li>
      <li>71</li>
      <li>72</li>
      <li>73</li>
      <li>74</li>
      <li>75</li>
      <li>76</li>
      <li>77</li>
      <li>78</li>
      <li>79</li>
      <li>80</li>
      <li>81</li>
      <li>82</li>
      <li>83</li>
      <li>84</li>
      <li>85</li>
      <li>86</li>
      <li>87</li>
      <li>88</li>
      <li>89</li>
      <li>90</li>
      <li>91</li>
      <li>92</li>
      <li>93</li>
      <li>94</li>
      <li>95</li>
      <li>96</li>
      <li>97</li>
      <li>98</li>
      <li>99</li>
      <li>258</li>
      <li>259</li>
      <li>260</li>
      <li>261</li>
      <li>262</li>
      <li>263</li>
      <li>264</li>
      <li>265</li>
      <li>266</li>
      <li>267</li>
      <li>268</li>
      <li>269</li>
      <li>270</li>
      <li>271</li>
      <li>272</li>
      <li>273</li>
      <li>274</li>
      <li>275</li>
      <li>276</li>
      <li>277</li>
      <li>278</li>
      <li>279</li>
      <li>280</li>
      <li>281</li>
      <li>282</li>
      <li>283</li>
      <li>284</li>
      <li>285</li>
      <li>286</li>
      <li>287</li>
      <li>288</li>
      <li>289</li>
      <li>290</li>
      <li>291</li>
      <li>292</li>
      <li>293</li>
      <li>294</li>
      <li>295</li>
      <li>296</li>
      <li>297</li>
      <li>298</li>
      <li>299</li>
      <li>300</li>
      <li>301</li>
      <li>302</li>
      <li>303</li>
      <li>304</li>
      <li>305</li>
      <li>306</li>
      <li>307</li>
      <li>308</li>
      <li>309</li>
      <li>310</li>
      <li>311</li>
      <li>312</li>
      <li>313</li>
      <li>314</li>
      <li>315</li>
      <li>316</li>
      <li>317</li>
      <li>318</li>
      <li>319</li>
      <li>320</li>
      <li>321</li>
      <li>322</li>
      <li>323</li>
      <li>324</li>
      <li>325</li>
      <li>326</li>
      <li>327</li>
      <li>328</li>
    </ul>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core';
import PullUp from '@better-scroll/pull-up';
export default {
  name: 'Category',
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    console.log(document.querySelector('.wrapper'));
    // BScroll.use(PullUp);
    this.scroll = new BScroll(document.querySelector('.wrapper'), {
      // probeType: 3,
      // pullUpLoad: true,
      // mouseWheel: true,
    });
    // this.scroll.on('scroll', (position) => {
    //   console.log(position);
    // });
    // this.scroll.on('pullingUp', () => {
    //   console.log('上拉加载');
    // });
  },
};
</script>

<style scoped>
.wrapper {
  height: calc(100vh - 44px);
  overflow: hidden;
}
</style>
