async function main() {
  const Voting = await ethers.getContractFactory("Voting");

  const Voting_ = await Voting.deploy(["Marko", "Luka", "Ivan"], 60);
  console.log("Contract address:", Voting_.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });