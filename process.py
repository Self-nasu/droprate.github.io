from rapidminer import RapidMiner, Process

# Connect to RapidMiner Server or Studio
rm = RapidMiner()

# Load the process
process = Process(file='test.rmp')

# Execute the process
result = process.run()

# Save the output to a web-accessible location
output_path = 'output.csv'
process.export_results(output_path)

print(f"Results exported to: {output_path}")
